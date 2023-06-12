import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius?: string;

		colors: {
			white: string;
			black: string;
			red: string;
			orange: string;
			yellow: string;
			green: string;
			teal: string;
			cyan: string;
			blue: string;
			indigo: string;
			purple: string;
			pink: string;
			gray100: string;
			gray200: string;
			gray300: string;
			gray400: string;
			gray500: string;
			gray600: string;
			gray700: string;
			gray800: string;
			gray900: string;
			primary: string;
			secondary: string;
			menu: string;
			background: string;
		};
		fontFamily: {
			body: string;
		};
		fontSize: {
			lg: string;
			xxlg: string;
		};
	}
}
