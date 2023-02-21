import { all, takeEvery } from 'redux-saga/effects';
import { CREATE_NOTIFICATION } from './+actions.types';

export default function* NotificationSagas() {
	yield all([takeEvery(CREATE_NOTIFICATION, () => null)]);
}
