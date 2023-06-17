import Head from 'components/Head';
import * as S from './MyCart';
import OrderHeader from 'components/OrderHeader';
import Table from './Table';

const MyCart = () => {
	return (
		<>
			<Head title='Carrinho' />
			<S.Container>
				<OrderHeader />
				<Table />
			</S.Container>
		</>
	);
};

export default MyCart;
