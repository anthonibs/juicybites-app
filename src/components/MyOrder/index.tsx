import * as S from './MyOrder';
import { useCart } from 'hooks/useCart';

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

const MyOrder = () => {
	const { cart } = useCart();
	const disabled = cart.length > 0 ? true : false;

	return (
		<S.MyLink to='/cart' aria-disabled={disabled}>
			<span>Meu Pedido</span>
			<CartIcon />
			{cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
		</S.MyLink>
	);
};

export default MyOrder;