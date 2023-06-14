import Head from 'components/Head';
import Snacks from 'components/Snacks';
import SnackTitle from 'components/SnackTitle';
import { SnackData } from 'interfaces/SnackData';
import { useEffect, useState } from 'react';
import { getIceCreams } from 'services/api';

const IceCreamPage = () => {
	const [iceCreams, setIceCreams] = useState<SnackData[]>([]);

	useEffect(() => {
		(async () => {
			const drinksRequest = await getIceCreams();

			setIceCreams(drinksRequest.data);
		})();
	}, []);

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
