import Head from 'components/Head';
import Snacks from 'components/Snacks';
import SnackTitle from 'components/SnackTitle';
import { useSnack } from 'hooks/useSnack';

const PizzasPage = () => {
	const { pizzas } = useSnack();

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
