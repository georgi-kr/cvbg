import React from 'react';
import './home.component.scss';

import { ContentContainerComponent } from './content-container/content-container.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';

export const HomeComponent = () => {
	return (
		<div className={'home-wrapper'}>
			<LeftPanelComponent />
			<ContentContainerComponent />
		</div>
	);
};
