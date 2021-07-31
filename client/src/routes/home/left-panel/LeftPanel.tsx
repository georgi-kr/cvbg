import React, { useContext } from 'react';
import './LeftPanel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';

import { CreateResumeAction, SelectResumeAction } from '../../../core/+store/resumes/+actions.types';
import { LanguageContext } from '../../../core/components/langugage/language.context';
import { LanguageSelector } from '../../../core/components/langugage/language-selector/LanguageSelector';
import { ThemeToggle } from '../../../core/components/theme/theme-toggle/ThemeToggle';
import { ResumeModel } from '../../../core/models/resume/resume.model';
import { AppState } from '../../../core/+store/root.reducer';

export const LeftPanel = () => {
	const dispatch = useDispatch();
	const newResumeIdx = useSelector((state: AppState) => state.resumes.all.length);
	const resumes = useSelector((state: AppState) => state.resumes);
	const { translate } = useContext(LanguageContext);

	function createResume(idx: number) {
		dispatch(CreateResumeAction(new ResumeModel({ name: `${translate(['new', 'resume'])} (${idx})` })));
	}

	function selectResume(id: string) {
		dispatch(SelectResumeAction(id));
	}

	return (
		<div className={'left-panel-container'}>
			<div className={'settings-wrapper flex-between'}>
				<LanguageSelector />
				<ThemeToggle />
			</div>
			<Button
				className={'create-btn'}
				variant={'contained'}
				color={'primary'}
				onClick={() => createResume(newResumeIdx)}
			>
				{translate(['create', 'resume'])}
			</Button>
			<div className={'resume-explorer'}>
				<List>
					{resumes.all.map((r) => {
						return (
							<ListItem
								key={r.id}
								button
								selected={resumes.selectedResumeId === r.id}
								onClick={() => selectResume(r.id)}
							>
								<ListItemText primary={r.name} />
							</ListItem>
						);
					})}
				</List>
			</div>
		</div>
	);
};
