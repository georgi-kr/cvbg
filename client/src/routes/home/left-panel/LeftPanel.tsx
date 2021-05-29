import React from 'react';
import './LeftPanel.scss';

import { Button } from '@material-ui/core';
import { text } from '../../../core/helpers/text';
import { LanguageSelector } from '../../../core/components/langugage/language-selector/LanguageSelector';
import { ThemeToggle } from '../../../core/components/theme/theme-toggle/ThemeToggle';

export const LeftPanel = () => {
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
