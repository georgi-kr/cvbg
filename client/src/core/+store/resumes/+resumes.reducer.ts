import { createReducer } from '@reduxjs/toolkit';
import { CreateResumeSuccessAction } from './actions.types';

type ResumesState = {
	resumes: any[];
};

const initialState: ResumesState = {
	resumes: []
};

export const ResumeReducer = createReducer<ResumesState>(initialState, (builder) =>
	builder.addCase(CreateResumeSuccessAction, (state, action) => {
		return {
			...state,
			resumes: [...state.resumes, action.payload]
		};
	})
);
