import * as S from './EmptyCart';

import manAndBurgerImg from '../../assets/man-and-burger.svg';

interface EmptyCartProps {
	title: string;
}

const EmptyCart = ({ title }: EmptyCartProps) => {
	return (
		<S.Container>
			<h2>{title}</h2>
			<S.Button to='/'>Voltar para Início</S.Button>
			<img src={manAndBurgerImg} alt='Homem com hambúrgier' />
		</S.Container>
	);
};

export default EmptyCart;
