import React, { FC } from 'react';
import './left-panel.component.scss';

import { Button } from '@material-ui/core';
import { text } from '../../../core/helpers/text';
import { LanguageSelector } from '../../../core/components/langugage/language-selector/language-selector.component';
import { ThemeToggle } from '../../../core/components/theme/theme-toggle/theme-toggle.component';

export const LeftPanelComponent: FC = () => {
	return (
		<div className={'left-panel-container'}>
			<div className={'settings-wrapper flex-between'}>
				<LanguageSelector />
				<ThemeToggle />
			</div>
			<Button className={'create-btn'} variant={'contained'} color={'primary'}>
				{text('createCV')}
			</Button>
		</div>
	);
};
