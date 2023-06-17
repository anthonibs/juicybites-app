import styled from 'styled-components';

export const Container = styled.main`
	background-color: ${({ theme }) => theme.colors.gray900};
	padding: 2rem 2.5rem;
	border-radius: 8px;

	table {
		width: 100%;
		border-spacing: 0 0;
		border-collapse: collapse;

		th {
			padding: 0 1rem 0.05rem 1rem;
			font-weight: 500;
			font-size: 1.125rem;
			text-align: left;

			&:nth-child(2) {
				padding-left: 2rem;
			}
		}

		td {
			padding: 1.5rem 1rem 1.5rem 1rem;
			border-bottom: 1px solid ${({ theme }) => theme.colors.yellow};

			h4 {
				margin-bottom: 0.5rem;
				font-weight: 400;
				font-size: 1.125rem;
			}

			span,
			h5 {
				font-weight: 700;
				font-size: 1.5rem;
			}

			div {
				display: flex;
				gap: 0.5rem;
				align-items: center;

				button {
					all: unset;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: opacity 0.3s;

					&:disabled {
						opacity: 0.4;
					}
				}
			}

			&:first-child {
				width: 7.5rem;
				padding-left: 0;
				padding-right: 0;

				img {
					object-fit: cover;
					width: 7.5rem;
					height: 7.5rem;
					border-radius: 8px;
				}
			}

			&:nth-child(2) {
				padding: 2rem;
				width: 20rem;
			}

			&:nth-child(3),
			&:nth-child(4) {
				width: 11rem;
			}

			&:last-child {
				width: 1.5rem;
				padding-right: 0;

				button {
					background: transparent;
					border: none;
					width: 100%;
					display: flex;
					align-items: center;
					justify-items: center;

					svg {
						fill: ${({ theme }) => theme.colors.yellow};
						width: 1.5rem;
						height: 1.5rem;
					}
				}
			}
		}
	}
`;
