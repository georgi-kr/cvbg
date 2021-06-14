// import { put } from 'redux-saga/effects';
import { Action } from '../../interfaces/action.type';

export function* saveCurrentResumeWorker(action: Action<any>) {
	return action;

	// try {
	// 	yield put(CreateResumeSuccessAction(action.payload));
	// } catch (e) {
	// 	yield put(CreateResumeFailureAction(e.message));
	// }
}
