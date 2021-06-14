import { createResumeWorker } from './create-resume.reducer';
import { all, takeEvery } from 'redux-saga/effects';
import { ADD_SECTION, CREATE_RESUME, SAVE_CURRENT_RESUME, SELECT_RESUME } from './+actions.types';
import { selectResumeWorker } from './select-resume-reducer';
import { saveCurrentResumeWorker } from './save-current-resume.reducer';
import { addSectionWorker } from './add-section.reducer';

export default function* ResumeSagas() {
	yield all([
		takeEvery(CREATE_RESUME, createResumeWorker),
		takeEvery(SELECT_RESUME, selectResumeWorker),
		takeEvery(SAVE_CURRENT_RESUME, saveCurrentResumeWorker),
		takeEvery(ADD_SECTION, addSectionWorker)
	]);
}
