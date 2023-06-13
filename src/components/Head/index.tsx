interface IHeadProps {
	title: string;
	description?: string;
}

const Head = ({ title, description = '' }: IHeadProps): null => {
	document.title = `JuicyBites | ${title}`;
	document.querySelector('[name=description]')?.setAttribute('content', description);

	return null;
};

export default Head;
