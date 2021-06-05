import React, { FC } from 'react';
import './ContentContainer.scss';
import { CVCanvas } from './cv-canvas/CVCanvas';
import { useSelector } from 'react-redux';
import { AppState } from '../../../core/+store/root.reducer';

export const ContentContainer: FC = () => {
	const resumes = useSelector((state: AppState) => state.resumes);
	return (
		<div className={'content-container'}>
			<CVCanvas />
		</div>
	);
};
