import { createResumeWorker } from './create-resume.reducer';
import { all, takeEvery } from 'redux-saga/effects';
import { CREATE_RESUME_REQUEST } from './actions.types';

export default function* ResumesSagas() {
	yield all([takeEvery(CREATE_RESUME_REQUEST, createResumeWorker)]);
}
