import { useCart } from 'hooks/useCart';
import * as S from '../OrderCloseAction';
import { currencyFormat } from 'helpers/currencyFormat';

const ConfirmOrder = () => {
	const { cart, confirmOrder } = useCart();

	const totalAmout = cart.reduce((acc, item) => (acc += item.subtotal), 0);

	return (
		<S.Container>
			<button type='button' onClick={confirmOrder}>
				Finalizar Pedido
			</button>
			<span>
				Total <strong>{currencyFormat(totalAmout)}</strong>
			</span>
		</S.Container>
	);
};

export default ConfirmOrder;
