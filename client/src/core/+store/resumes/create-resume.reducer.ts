import { put, select } from 'redux-saga/effects';
import { Action } from '../../interfaces/action.type';
import { SelectResumeAction } from './+actions.types';
import { CreateNotificationAction } from '../notifications/+actions.types';

const getResumeIdx = (state) => state.resumes.all.length - 1;

export function* createResumeWorker(action: Action<any>) {
	try {
		const idx = yield select(getResumeIdx);
		yield put(
			SelectResumeAction({
				resume: action.payload,
				idx
			})
		);
	} catch (e) {
		yield put(CreateNotificationAction(e.message));
	}
}
