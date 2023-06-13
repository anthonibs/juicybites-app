import Head from 'components/Head';
import Snacks from 'components/Sancks';
import SnackTitle from 'components/SnackTitle';

const PizzasPage = () => {
	const data = [
		{
			id: 1,
			snack: 'pizza',
			name: 'Calabresa',
			description:
				'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
			price: 25,
			image: 'https://i.imgur.com/5rjJGkV.jpg',
		},
		{
			id: 2,
			snack: 'pizza',
			name: 'Portuguesa',
			description:
				'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
			price: 28.5,
			image: 'https://i.imgur.com/WCoyGoI.png',
		},
	];
	return (
		<>
			<Head
				title='Experimente Pizzas Autênticas e Saborosas'
				description='Experimente nossas pizzas artesanais: sabor autêntico e qualidade inigualável!'
			/>
			<SnackTitle>Pizzas</SnackTitle>
			<Snacks snacks={data} />
		</>
	);
};

export default PizzasPage;
