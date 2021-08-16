import React, { FC, useContext, useRef } from 'react';
import './ContentContainer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { AppState } from '../../../core/+store/root.reducer';
import { SaveResumeAction } from '../../../core/+store/resumes/+actions.types';
import { LanguageContext } from '../../../core/components/langugage/language.context';
import { CVCanvas } from './cv-canvas/CVCanvas';
import { SectionModel } from '../../../core/models/section/section.model';
import { LayoutItem } from '../../../core/models/resume/resume.model';
import { SectionType } from '../../../core/types/section.type';

export const ContentContainer: FC = () => {
	const dispatch = useDispatch();
	const resumes = useSelector((state: AppState) => state.resumes);
	const { translate } = useContext(LanguageContext);
	const [selectedResume, setSelectedResume] = React.useState(
		resumes.all.find((r) => r.id === resumes.selectedResumeId)
	);
	const [reorderItemsMode, setReorderItemsMode] = React.useState(false);
	const containerRef = useRef<HTMLDivElement>();

	function saveCurrentResume(resume) {
		dispatch(SaveResumeAction(resume));
	}

	function addLayoutItem(layoutItems: LayoutItem[], sections: SectionType[]): LayoutItem {
		const y = layoutItems.reduce((acc, item) => {
			acc = Math.max(acc, item.y + item.h);
			return acc;
		}, 0);
		return {
			x: 0,
			y,
			h: 4,
			w: 4,
			i: sections[sections.length - 1].id
		};
	}

	function addSectionToCurrent() {
		setSelectedResume((prevState) => {
			const newSections = [...prevState.sections, new SectionModel(translate(['section']))];
			return {
				...prevState,
				sections: newSections,
				layoutItems: [...prevState.layoutItems, addLayoutItem(prevState.layoutItems, newSections)]
			};
		});
	}

	function toggleReorderItemsMode() {
		setReorderItemsMode((prevState) => !prevState);
	}

	React.useEffect(() => {
		if (selectedResume) {
			saveCurrentResume(JSON.parse(JSON.stringify(selectedResume)));
		}
		setSelectedResume(() => {
			return resumes.all.find((r) => r.id === resumes.selectedResumeId);
		});
	}, [resumes.selectedResumeId]);

	return (
		<div className={'content-container'} ref={containerRef}>
			{selectedResume ? (
				<>
					<div className={'controls'}>
						<Button color={'primary'} variant={'contained'} onClick={addSectionToCurrent}>
							<Add /> {translate(['add', 'section'])}
						</Button>
						<Button
							color={reorderItemsMode ? 'secondary' : 'primary'}
							variant={'contained'}
							onClick={toggleReorderItemsMode}
						>
							{translate(['reorder'])}
						</Button>
						{/*<Button>Theme</Button> To implement */}
						{/*<Button>AutoSave</Button> To implement */}
						<Button
							color={'primary'}
							variant={'contained'}
							onClick={() => saveCurrentResume(selectedResume)}
						>
							{translate('save')}
						</Button>
					</div>
					<CVCanvas
						resume={selectedResume}
						reorderItemsMode={reorderItemsMode}
						setSelectedResume={setSelectedResume}
						containerRef={containerRef}
					/>
				</>
			) : (
				<div>{translate(['select', 'or', 'create', 'resume'])}</div>
			)}
		</div>
	);
};
