import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.75rem;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}

	.snack {
		position: relative;
		background: ${({ theme }) => theme.colors.gray900};
		padding: 1.75rem;
		border-radius: 4px;

		h2 {
			margin-bottom: 0.75rem;
			font-weight: 700;
			font-size: 1.5rem;
			text-align: center;
		}

		img {
			object-fit: cover;
			object-position: center;
			width: 100%;
			height: 11.25rem;
			border-radius: 4px;
			margin-bottom: 0.375rem;
		}

		p {
			font-size: 0.875rem;
		}

		div {
			display: flex;
			margin-top: 0.875rem;
			align-items: center;
			justify-items: flex-end;
			justify-content: space-between;

			strong {
				font-size: 2rem;
			}

			button {
				background: ${({ theme }) => theme.colors.menu};
				border-radius: 50%;
				width: 3rem;
				height: 3rem;
				border: none;
				display: flex;
				align-items: center;
				justify-content: center;

				svg {
					stroke: ${({ theme }) => theme.colors.white};
					width: 1.25rem;
					height: 1.25rem;
				}

				&:hover {
					background: ${darken(0.05, '#F5CA02')};
				}
			}
		}
	}
`;
