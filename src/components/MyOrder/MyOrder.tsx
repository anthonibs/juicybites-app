import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MyLink = styled(Link)`
	position: absolute;
	right: 1.5rem;
	bottom: 0.5rem;
	background: ${({ theme }) => theme.colors.yellow};
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	transition: background 0.3s;

	&:hover {
		background: ${darken(0.1, '#F5CA02')};
	}

	&[aria-disabled='false'] {
		background: #c7c7c7;
		color: #a09c9c;
		pointer-events: none;

		svg {
			fill: #a09c9c;
		}
	}

	span:first-child {
		margin-right: 0.25rem;
		font-weight: 500;
		font-size: 1rem;
	}
	span:last-child {
		margin-left: 0.75rem;
		font-weight: 500;
		font-size: 1.5rem;
		color: ${({ theme }) => theme.colors.black};
	}

	svg {
		pointer-events: none;
		fill: ${({ theme }) => theme.colors.white};
		width: 2rem;
		height: 2rem;
	}

	@media (max-width: 720px) {
		top: 0.5rem;
		bottom: initial;

		span:first-child {
			display: none;
		}
	}
`;
