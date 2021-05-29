import React, { FC } from 'react';
import './ContentContainer.scss';
import { CVCanvas } from './cv-canvas/CVCanvas';

export const ContentContainer: FC = () => {
	return (
		<div className={'content-container'}>
			<CVCanvas />
		</div>
	);
};
