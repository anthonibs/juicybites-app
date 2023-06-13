import * as S from './Sidebar';

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg';
import { ReactComponent as SodaIcon } from '../../assets/soda.svg';
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg';

import menuImage from '../../assets/menu.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	function handleToggleMenu() {
		setMenuOpen(!menuOpen);
	}

	return (
		<S.Container isMenuOpen={menuOpen}>
			<button type='button' onClick={handleToggleMenu}>
				<img src={menuImage} alt='Abrir e fechar menu' />
			</button>

			<nav>
				<ul>
					<li>
						<NavLink to='/'>
							<BurgerIcon />
							<span>Hambúrgueres</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/pizzas'>
							<PizzaIcon />
							<span>Pizza</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/drinks'>
							<SodaIcon />
							<span>Bebidas</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/ice-cream'>
							<IceCreamIcon />
							<span>Sobremesas</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</S.Container>
	);
};

export default Sidebar;
