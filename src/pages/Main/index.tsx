import { Outlet } from 'react-router-dom';
import * as S from './Main';

import logoImage from '../../assets/logo.svg';

import Sidebar from 'components/Sidebar';

export default function Main() {
	return (
		<S.Container>
			<Sidebar />
			<section>
				<img src={logoImage} alt='Logotipo JuicyBites' />
				<Outlet />
			</section>
		</S.Container>
	);
}
