import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

import { AppRoutes } from './routes';

import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/global';
import { SnackProvider } from 'context/SnackContext';
import { CartProvider } from 'context/CartContext';

export default function App() {
	return (
		<BrowserRouter>
			<Theme>
				<SnackProvider>
					<CartProvider>
						<ToastContainer autoClose={2000} />
						<GlobalStyle />
						<AppRoutes />
					</CartProvider>
				</SnackProvider>
			</Theme>
		</BrowserRouter>
	);
}
