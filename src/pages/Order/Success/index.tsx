import Head from 'components/Head';
import * as S from './Success';
import { Title } from 'components/SnackTitle/SnackTitle';
import { useParams } from 'react-router-dom';

const Order = () => {
	const { orderID } = useParams();

	return (
		<S.Container>
			<Head title='Compra Realizada com Sucesso!' />

			<S.Inner>
				<Title>Compra Realizada com Sucesso!</Title>
				<p>
					Número de Pedido <code>#{orderID}</code>
				</p>

				<S.SubTitle>Dados de Contato da Loja</S.SubTitle>

				<ul>
					<li>Endereço: Av Central, 123</li>
					<li>Tel: 11 98765-4321</li>
				</ul>
				<br />
				<a href='/'>Voltar para página inicial</a>
			</S.Inner>
		</S.Container>
	);
};

export default Order;
