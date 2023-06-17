import { currencyFormat } from 'helpers/currencyFormat';
import * as S from './Snacks';

import { FiPlus } from 'react-icons/fi';
import SkeletonSnack from './SkeletonSnack';
import { SnackData } from 'interfaces/SnackData';
import { useCart } from 'hooks/useCart';

interface ISnacksProps {
	snacks: SnackData[];
}

const Snacks = ({ snacks }: ISnacksProps) => {
	const { cart, addSnackIntoCart } = useCart();

	return (
		<S.Container>
			{!snacks.length
				? Array(4)
						.fill(4)
						.map((_, i) => <SkeletonSnack key={i} />)
				: snacks.map((snack) => {
						const snackExistent = cart.find(
							(item) => item.id === snack.id && item.snack === snack.snack,
						);

						return (
							<div key={snack.id} className='snack'>
								{snackExistent && <span>{snackExistent.quantity}</span>}
								<h2>{snack.name}</h2>
								<img src={snack.image} alt={snack.name} />
								<p>{snack.description}</p>

								<div>
									<strong>{currencyFormat(snack.price)}</strong>
									<button type='button' onClick={() => addSnackIntoCart(snack)}>
										<FiPlus />
									</button>
								</div>
							</div>
						);
				  })}
		</S.Container>
	);
};

export default Snacks;
