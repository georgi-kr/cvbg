import { combineReducers } from 'redux';
import { ResumeReducer } from './resumes/+resumes.reducer';

export const rootReducer = combineReducers({
	resumes: ResumeReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
