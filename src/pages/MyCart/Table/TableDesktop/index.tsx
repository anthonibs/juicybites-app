import { useCart } from 'hooks/useCart';
import * as S from './TableDesktop';
import { currencyFormat } from 'helpers/currencyFormat';

import minusImg from '../../../../assets/circle-minus.svg';
import plusImg from '../../../../assets/circle-plus.svg';

import { FaTrashAlt } from 'react-icons/fa';
import ConfirmOrder from 'components/ConfirmOrder';

const TableDesktop = () => {
	const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement } = useCart();

	return (
		<S.Container>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Lanche</th>
						<th>Quantidade</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.map((item) => (
						<tr key={`${item.snack}-${item.id}`}>
							<td>
								<img src={item.image} alt={item.name} />
							</td>
							<td>
								<h4>{item.name}</h4>
								<span>{currencyFormat(item.price)}</span>
							</td>
							<td>
								<div>
									<button
										type='button'
										onClick={() => snackCartDecrement(item)}
										disabled={item.quantity <= 1}
									>
										<img src={minusImg} alt='' />
									</button>

									<span>{`${item.quantity}`.padStart(2, '0')}</span>

									<button type='button' onClick={() => snackCartIncrement(item)}>
										<img src={plusImg} alt='' />
									</button>
								</div>
							</td>
							<td>
								<h5>{currencyFormat(item.subtotal)}</h5>
							</td>
							<td>
								<button type='button' onClick={() => removeSnackFromCart(item)}>
									<FaTrashAlt />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<ConfirmOrder />
		</S.Container>
	);
};

export default TableDesktop;
