// import { put } from 'redux-saga/effects';
import { Action } from '../../interfaces/action.type';

export function* selectResumeWorker(action: Action<any>) {
	console.log(action);

	// try {
	// 	yield put(CreateResumeSuccessAction(action.payload));
	// } catch (e) {
	// 	yield put(CreateResumeFailureAction(e.message));
	// }
}
