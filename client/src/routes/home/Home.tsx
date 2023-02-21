import React, { FC } from 'react';
import './Home.scss';
import { LeftPanel } from './left-panel/LeftPanel';
import { ContentContainer } from './content-container/ContentContainer';

export const Home: FC = () => {
	return (
		<div className={'home-wrapper'}>
			<LeftPanel />
			<ContentContainer />
		</div>
	);
};
