import * as S from './MyCart';

import Head from 'components/Head';
import OrderHeader from 'components/OrderHeader';
import Table from './Table';


const MyCart = () => {
	return (
		<S.Container>
			<Head title='Carrinho' />
			<OrderHeader />
			<Table />
		</S.Container>
	);
};

export default MyCart;
