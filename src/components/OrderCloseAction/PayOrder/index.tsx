import { useCart } from 'hooks/useCart';

import * as S from '../OrderCloseAction';

import { currencyFormat } from 'helpers/currencyFormat';

const PayOrder = () => {
	const { cart } = useCart();

	const totalAmount = cart.reduce((acc, item) => (acc += item.quantity * item.price), 0);

	return (
		<S.Container>
			<button type='submit'>Pagar</button>
			<span>
				Total <strong>{currencyFormat(totalAmount)}</strong>
			</span>
		</S.Container>
	);
};

export default PayOrder;
