import { createReducer } from '@reduxjs/toolkit';
import { CreateResumeAction, SelectResumeAction } from './+actions.types';

type ResumesState = {
	all: any[];
	selectedResume: {
		idx: number;
		resume: any;
	};
};

const initialState: ResumesState = {
	all: [],
	selectedResume: {
		idx: 0,
		resume: null
	}
};

export const ResumeReducer = createReducer<ResumesState>(initialState, (builder) =>
	builder
		.addCase(CreateResumeAction, (state, action) => {
			return {
				...state,
				all: [...state.all, action.payload]
			};
		})
		.addCase(SelectResumeAction, (state, action) => {
			const { idx, resume } = action.payload;
			return {
				...state,
				selectedResume: {
					idx,
					resume
				}
			};
		})
);
