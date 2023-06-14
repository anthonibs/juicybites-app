import Head from 'components/Head';
import Snacks from 'components/Snacks';
import SnackTitle from 'components/SnackTitle';
import { SnackData } from 'interfaces/SnackData';
import { useEffect, useState } from 'react';
import { getDrinks } from 'services/api';

const DrinksPage = () => {
	const [drinks, setDrinks] = useState<SnackData[]>([]);

	useEffect(() => {
		(async () => {
			const drinksRequest = await getDrinks();

			setDrinks(drinksRequest.data);
		})();
	}, []);

	return (
		<>
			<Head
				title='Sede Saciada!'
				description='Refresque-se com Nossas Bebidas: Sabores Inigualáveis!'
			/>
			<SnackTitle>Bebidas</SnackTitle>
			<Snacks snacks={drinks} />
		</>
	);
};

export default DrinksPage;
