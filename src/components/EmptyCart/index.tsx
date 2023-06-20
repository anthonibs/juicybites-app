import * as S from './EmptyCart';

import manAndBurgerImg from '../../assets/man-and-burger.svg';

interface EmptyCartProps {
	title: string;
}

const EmptyCart = ({ title }: EmptyCartProps) => {
	return (
		<S.Container>
			<h2>{title}</h2>
			<S.Button to='/'>Voltar para Cardápio</S.Button>
			<img src={manAndBurgerImg} alt='Homem com hambúrguer' />
		</S.Container>
	);
};

export default EmptyCart;
