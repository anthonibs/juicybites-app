import Head from 'components/Head';
import Snacks from 'components/Snacks';
import SnackTitle from 'components/SnackTitle';
import { useSnack } from 'hooks/useSnack';

const BurgersPage = () => {
	const { burgers } = useSnack();

	return (
		<>
			<Head
				title='Hambúrgueres Artesanais'
				description='Desfrute das melhores hambúrgueres em nossa página web! Deliciosos, suculentos e preparados com ingredientes frescos. Encontre uma ampla variedade de opções que vão te deixar com água na boca. Faça seu pedido agora e saboreie a perfeição entre dois pães!'
			/>
			<SnackTitle>Hambúrgueres</SnackTitle>

			<Snacks snacks={burgers} />
		</>
	);
};

export default BurgersPage;
