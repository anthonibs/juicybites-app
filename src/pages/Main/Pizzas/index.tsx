import Head from 'components/Head';
import Snacks from 'components/Snacks';
import SnackTitle from 'components/SnackTitle';
import { SnackData } from 'interfaces/SnackData';
import { useEffect, useState } from 'react';
import { getPizzas } from 'services/api';

const PizzasPage = () => {
	const [pizzas, setPizzas] = useState<SnackData[]>([]);

	useEffect(() => {
		(async () => {
			const drinksRequest = await getPizzas();

			setPizzas(drinksRequest.data);
		})();
	}, []);

	return (
		<>
			<Head
				title='Experimente Pizzas Autênticas e Saborosas'
				description='Experimente nossas pizzas artesanais: sabor autêntico e qualidade inigualável!'
			/>
			<SnackTitle>Pizzas</SnackTitle>
			<Snacks snacks={pizzas} />
		</>
	);
};

export default PizzasPage;
