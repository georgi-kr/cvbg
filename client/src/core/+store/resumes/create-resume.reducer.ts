import { put } from 'redux-saga/effects';
import { Action } from '../../interfaces/action.type';
import { SelectResumeAction } from './+actions.types';
import { CreateNotificationAction } from '../notifications/+actions.types';

export function* createResumeWorker(action: Action<any>) {
	console.log(action);
	try {
		yield put(SelectResumeAction(action.payload));
	} catch (e) {
		yield put(CreateNotificationAction(e.message));
	}
}
