import { snackEmoji } from 'helpers/snackEmoji';
import { CustomerData } from 'interfaces/CustomerData';
import { SnackData } from 'interfaces/SnackData';
import { ReactNode, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface CartProviderProps {
	children: ReactNode;
}

interface Snack extends SnackData {
	quantity: number;
	subtotal: number;
}

interface CartContextProps {
	cart: Snack[];
	addSnackIntoCart: (snack: SnackData) => void;
	removeSnackFromCart: (snack: Snack) => void;
	snackCartIncrement: (snack: Snack) => void;
	snackCartDecrement: (snack: Snack) => void;
	confirmOrder: () => void;
	payOrder: (customer: CustomerData) => void;
}

export const CartContext = createContext({} as CartContextProps);
CartContext.displayName = 'Shopping Cart';

const localStorageKey = '@shopping-cart';

export const CartProvider = ({ children }: CartProviderProps) => {
	const navigate = useNavigate();

	const [cart, setCart] = useState<Snack[]>(() => {
		const isCartExistent = localStorage.getItem(localStorageKey);
		if (isCartExistent) {
			return JSON.parse(isCartExistent);
		}
		return [];
	});

	function saveCart(items: Snack[]) {
		setCart(items);
		localStorage.setItem(localStorageKey, JSON.stringify(items));
	}

	function clearCart() {
		localStorage.removeItem(localStorageKey);
	}

	function addSnackIntoCart(snack: SnackData): void {
		const snackExistentInCart = cart.find(
			(item) => item.snack === snack.snack && item.id === snack.id,
		);

		if (snackExistentInCart) {
			const newCart = cart.map((item) => {
				if (item.id === snack.id) {
					const quantity = item.quantity + 1;
					const subtotal = quantity * item.price;

					return { ...item, quantity, subtotal };
				}

				return item;
			});

			toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionando nos pedidos!`);
			saveCart(newCart);

			return;
		}

		const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
		const newCart = [...cart, newSnack];

		toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionando nos pedidos!`);
		saveCart(newCart);
	}

	function removeSnackFromCart(snack: Snack) {
		const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack));
		saveCart(newCart);
	}

	function updateSnackQuantity(snack: Snack, newQuantity: number) {
		if (newQuantity <= 0) return;

		const snackExistentInCart = cart.find(
			(item) => item.id === snack.id && item.snack === snack.snack,
		);

		if (!snackExistentInCart) return;

		const newCart = cart.map((item) => {
			if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
				return {
					...item,
					quantity: newQuantity,
					subtotal: item.price * newQuantity,
				};
			}
			return item;
		});

		saveCart(newCart);
	}

	function snackCartIncrement(snack: Snack) {
		updateSnackQuantity(snack, snack.quantity + 1);
	}

	function snackCartDecrement(snack: Snack) {
		updateSnackQuantity(snack, snack.quantity - 1);
	}

	function confirmOrder() {
		navigate('/payment');
	}

	function payOrder(customer: CustomerData) {
		console.log('payOrder', cart, customer);
		clearCart();
		// chamada de API para o backend
		return;
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addSnackIntoCart,
				removeSnackFromCart,
				snackCartIncrement,
				snackCartDecrement,
				confirmOrder,
				payOrder,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
