import React, { FC } from 'react';

interface Props {
	sections?: any;
}

export const CVCanvas: FC<Props> = ({ sections }) => {
	const renderSections = (sections: any): any => <div></div>;

	return <div className={'cv-canvas'}>{sections ? renderSections(sections) : <div>Empty canvas</div>}</div>;
};
