import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export const theme: DefaultTheme = {
	colors: {
		red: '#E03131',
		orange: '#E8590C',
		yellow: '#F5CA02',
		green: '#23DB42',
		teal: '#89DD13',
		cyan: '#3BC9DB',
		blue: '#25BEFF',
		indigo: '#4263Eb',
		purple: '#7E5CEF',
		pink: '#FE5895',
		gray100: '#FAFAFA',
		gray200: '#E9ECEF',
		gray300: '#DEE2E6',
		gray400: '#CED4DA',
		gray500: '#A4ACB4',
		gray600: '#64666B',
		gray700: '#424449',
		gray800: '#1D1E21',
		gray900: '#141518',
		primary: '#F83600',
		secondary: '#FE8C00',

		white: '#FFFFFF',
		black: '#232323',
		menu: '#ffd824',
		background: '#232323',
	},
	fontFamily: {
		body: 'Roboto',
	},
	fontSize: {
		lg: '2rem',
		xxlg: '2.75rem',
	},
};

interface ThemeProps {
	children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
