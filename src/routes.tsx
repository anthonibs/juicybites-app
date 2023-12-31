import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/Main';
import BurgersPage from 'pages/Main/Burgers';
import PizzasPage from 'pages/Main/Pizzas';
import DrinksPage from 'pages/Main/Drinks';
import IceCreamPage from 'pages/Main/IceCream';
import MyCart from 'pages/MyCart';
import Payment from 'pages/Payment';
import Success from 'pages/Order/Success';

export function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<MainPage />}>
				<Route path='/' element={<BurgersPage />} />
				<Route path='pizzas' element={<PizzasPage />} />
				<Route path='drinks' element={<DrinksPage />} />
				<Route path='ice-cream' element={<IceCreamPage />} />
			</Route>
			<Route path='cart' element={<MyCart />} />
			<Route path='payment' element={<Payment />} />
			<Route path='order'>
				<Route path='success/:orderID' element={<Success />} />
			</Route>
		</Routes>
	);
}
