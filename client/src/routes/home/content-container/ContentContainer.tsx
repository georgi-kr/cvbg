import React, { FC, useContext } from 'react';
import './ContentContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { AppState } from '../../../core/+store/root.reducer';
import { LanguageContext } from '../../../core/components/langugage/language.context';
import { AddSectionResumeAction, SaveCurrentResumeAction } from '../../../core/+store/resumes/+actions.types';
import { CVCanvas } from './cv-canvas/CVCanvas';
import { SectionModel } from '../../../core/models/section/section.model';

export const ContentContainer: FC = () => {
	const dispatch = useDispatch();
	const resumes = useSelector((state: AppState) => state.resumes);
	const { translate } = useContext(LanguageContext);
	const [selectedResume, setSelectedResume] = React.useState(
		resumes.selectedResume.resume || resumes.all[resumes.selectedResume.idx]
	);

	function saveCurrentResume() {
		dispatch(SaveCurrentResumeAction(selectedResume));
	}

	function addSectionToCurrent() {
		dispatch(AddSectionResumeAction(new SectionModel(translate(['new', 'section']))));
	}

	React.useEffect(() => {
		setSelectedResume(resumes.selectedResume.resume);
	}, [resumes.selectedResume]);

	return (
		<div className={'content-container'}>
			{selectedResume ? (
				<>
					<div className={'controls'}>
						<Button color={'primary'} variant={'contained'} onClick={addSectionToCurrent}>
							<Add /> {translate(['add', 'section'])}
						</Button>
						<Button color={'primary'} variant={'contained'} onClick={saveCurrentResume}>
							{translate('save')}
						</Button>
					</div>
					<CVCanvas resume={selectedResume} />
				</>
			) : (
				<div>{translate(['select', 'or', 'create', 'resume'])}</div>
			)}
		</div>
	);
};
