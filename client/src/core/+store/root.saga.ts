import { all, fork } from 'redux-saga/effects';
import ResumesSagas from './resumes/resumes.saga';

export function* rootSaga() {
	yield all([fork(ResumesSagas)]);
}
