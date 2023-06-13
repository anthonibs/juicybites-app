import { ReactNode } from 'react';
import * as S from './SnackTitle';

interface ITitleProps {
	children: ReactNode;
}

const SnackTitle = ({ children }: ITitleProps) => {
	return <S.Title>{children}</S.Title>;
};

export default SnackTitle;
