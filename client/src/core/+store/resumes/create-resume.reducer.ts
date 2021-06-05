import { put } from 'redux-saga/effects';
import { Action } from '../../interfaces/action.type';
import { CreateResumeFailureAction, CreateResumeSuccessAction } from './actions.types';

export function* createResumeWorker(action: Action<any>) {
	try {
		yield put(CreateResumeSuccessAction(action.payload));
	} catch (e) {
		yield put(CreateResumeFailureAction(e.message));
	}
}
