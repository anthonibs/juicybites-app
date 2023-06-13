import Head from 'components/Head';
import Snacks from 'components/Sancks';
import SnackTitle from 'components/SnackTitle';

const IceCreamPage = () => {
	const data = [
		{
			id: 1,
			snack: 'ice-cream',
			name: 'Casquinha',
			description: 'A casquinha crocante e saborosa que nossos clientes amam.',
			price: 4.5,
			image: 'https://i.imgur.com/YGmeoCm.jpg',
		},
		{
			id: 2,
			snack: 'ice-cream',
			name: 'Chocolate com granulado',
			description: 'Sorvete de chocolate com granulados em chocolate para você se deliciar.',
			price: 6,
			image: 'https://i.imgur.com/osAHOLe.jpg',
		},
		{
			id: 3,
			snack: 'ice-cream',
			name: 'Flocos',
			description: 'O tradicional flocos vem com cobertura em chocolate para adocicar seu dia.',
			price: 7,
			image: 'https://i.imgur.com/qgnFLiy.jpg',
		},
	];
	return (
		<>
			<Head
				title='Gelados Tentadores!'
				description='Refresque-se com nossas sobremesas geladas: pura tentação em cada colherada!'
			/>
			<SnackTitle>Sobremesas</SnackTitle>
			<Snacks snacks={data} />
		</>
	);
};

export default IceCreamPage;
