import { combineReducers } from 'redux';
import { ResumeReducer } from './resumes/+resume.reducer';
import { NotificationReducer } from './notifications/+notification.reducer';

export const rootReducer = combineReducers({
	resumes: ResumeReducer,
	notifications: NotificationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
