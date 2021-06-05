import { all, fork } from 'redux-saga/effects';
import ResumeSagas from './resumes/+resume.saga';
import NotificationSagas from './notifications/+notification.saga';

export function* rootSaga() {
	yield all([fork(ResumeSagas), fork(NotificationSagas)]);
}
