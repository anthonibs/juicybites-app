import Head from 'components/Head';
import Snacks from 'components/Snacks';
import SnackTitle from 'components/SnackTitle';
import { useSnack } from 'hooks/useSnack';

const IceCreamPage = () => {
	const { iceCreams } = useSnack();

	return (
		<>
			<Head
				title='Gelados Tentadores!'
				description='Refresque-se com nossas sobremesas geladas: pura tentação em cada colherada!'
			/>
			<SnackTitle>Sobremesas</SnackTitle>
			<Snacks snacks={iceCreams} />
		</>
	);
};

export default IceCreamPage;
