import * as S from './Skeleton';

export interface SkeletonProps {
	type: 'title' | 'text' | 'image' | 'thumbnail';
}

const Skeleton = ({ type }: SkeletonProps) => {
	return <S.SkeletonElement type={type} />;
};

export default Skeleton;
