import * as S from './OrderHeader';
import LogoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useCart } from 'hooks/useCart';

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

const OrderHeader = () => {
	const { cart } = useCart();

	return (
		<S.Container>
			<Link to='/'>
				<img src={LogoImage} alt='Logo JuicyBites' />
			</Link>

			<div>
				<div>
					<h3>Meu Pedidos</h3>
					<span>
						<strong>{`${cart.length}`.padStart(2, '0')} lanche(s)</strong>
					</span>
				</div>
				<CartIcon />
			</div>
		</S.Container>
	);
};

export default OrderHeader;
