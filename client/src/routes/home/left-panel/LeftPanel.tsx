import React from 'react';
import './LeftPanel.scss';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { CreateResumeRequest } from '../../../core/+store/resumes/actions.types';
import { text } from '../../../core/helpers/text';
import { LanguageSelector } from '../../../core/components/langugage/language-selector/LanguageSelector';
import { ThemeToggle } from '../../../core/components/theme/theme-toggle/ThemeToggle';

export const LeftPanel = () => {
	const dispatch = useDispatch();

	const createResume = () => dispatch(CreateResumeRequest({}));

	return (
		<div className={'left-panel-container'}>
			<div className={'settings-wrapper flex-between'}>
				<LanguageSelector />
				<ThemeToggle />
			</div>
			<Button className={'create-btn'} variant={'contained'} color={'primary'} onClick={createResume}>
				{text('createCV')}
			</Button>
		</div>
	);
};
