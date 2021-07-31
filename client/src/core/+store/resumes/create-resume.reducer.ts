import { put, select } from 'redux-saga/effects';
import { Action } from '../../interfaces/action.type';
import { SelectResumeAction } from './+actions.types';
import { CreateNotificationAction } from '../notifications/+actions.types';

function getLastCreatedResumeId(state) {
	return state.resumes.all[state.resumes.all.length - 1].id;
}

export function* createResumeWorker(action: Action<any>) {
	try {
		const id = yield select(getLastCreatedResumeId);
		yield put(SelectResumeAction(id));
	} catch (e) {
		yield put(CreateNotificationAction(e.message));
	}
}
