import { useCart } from 'hooks/useCart';
import * as S from './ConfirmOrder';
import { currencyFormat } from 'helpers/currencyFormat';

const ConfirmOrder = () => {
	const { cart } = useCart();

	const totalAmout = cart.reduce((acc, item) => (acc += item.subtotal), 0);

	return (
		<S.Container>
			<button type='button'>Finalizar Pedido</button>
			<span>
				Total <strong>{currencyFormat(totalAmout)}</strong>
			</span>
		</S.Container>
	);
};

export default ConfirmOrder;
