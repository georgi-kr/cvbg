import React, { useContext } from 'react';
import './LeftPanel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import { CreateResumeAction } from '../../../core/+store/resumes/+actions.types';
import { LanguageContext } from '../../../core/components/langugage/language.context';
import { LanguageSelector } from '../../../core/components/langugage/language-selector/LanguageSelector';
import { ThemeToggle } from '../../../core/components/theme/theme-toggle/ThemeToggle';
import { ResumeModel } from '../../../core/models/resume/resume.model';
import { AppState } from '../../../core/+store/root.reducer';

export const LeftPanel = () => {
	const dispatch = useDispatch();
	const idx = useSelector((state: AppState) => state.resumes.all.length);
	const { translate } = useContext(LanguageContext);

	function createResume(name) {
		dispatch(CreateResumeAction(new ResumeModel({ name })));
	}

	return (
		<div className={'left-panel-container'}>
			<div className={'settings-wrapper flex-between'}>
				<LanguageSelector />
				<ThemeToggle />
			</div>
			<Button className={'create-btn'} variant={'contained'} color={'primary'} onClick={() => createResume(idx)}>
				{translate(['create', 'resume'])}
			</Button>
		</div>
	);
};
