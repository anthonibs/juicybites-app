import Head from 'components/Head';
import Snacks from 'components/Snacks';
import SnackTitle from 'components/SnackTitle';
import { useSnack } from 'hooks/useSnack';

const DrinksPage = () => {
	const { drinks } = useSnack();

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
