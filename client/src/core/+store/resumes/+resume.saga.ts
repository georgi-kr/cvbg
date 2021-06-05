import { createResumeWorker } from './create-resume.reducer';
import { all, takeEvery } from 'redux-saga/effects';
import { CREATE_RESUME, SELECT_RESUME } from './+actions.types';
import { selectResumeWorker } from './select-resume-reducer';

export default function* ResumeSagas() {
	yield all([takeEvery(CREATE_RESUME, createResumeWorker), takeEvery(SELECT_RESUME, selectResumeWorker)]);
}
