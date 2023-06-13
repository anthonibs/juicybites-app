import Head from 'components/Head';
import Snacks from 'components/Sancks';
import SnackTitle from 'components/SnackTitle';

const BurgersPage = () => {
	const data = [
		{
			id: 1,
			snack: 'burger',
			name: 'Mega',
			description:
				'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
			price: 25.5,
			image: 'https://i.imgur.com/upjIUnG.jpg',
		},
		{
			id: 2,
			snack: 'burger',
			name: 'Extra bacon',
			description:
				'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
			price: 23.5,
			image: 'https://i.imgur.com/B4J04AJ.jpg',
		},
	];

	return (
		<>
			<Head
				title='Hambúrgueres Artesanais'
				description='Desfrute das melhores hambúrgueres em nossa página web! Deliciosos, suculentos e preparados com ingredientes frescos. Encontre uma ampla variedade de opções que vão te deixar com água na boca. Faça seu pedido agora e saboreie a perfeição entre dois pães!'
			/>
			<SnackTitle>Hambúrgueres</SnackTitle>

			<Snacks snacks={data} />
		</>
	);
};

export default BurgersPage;
