import { createReducer } from '@reduxjs/toolkit';
import {
	AddSectionResumeAction,
	CreateResumeAction,
	SaveCurrentResumeAction,
	SelectResumeAction
} from './+actions.types';

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
		idx: -1,
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
		.addCase(SaveCurrentResumeAction, (state, action) => {
			return {
				...state,
				all: state.all.map((resume, idx) => {
					if (idx === state.selectedResume.idx) {
						return action.payload;
					}
					return resume;
				}),
				selectedResume: {
					idx: state.selectedResume.idx,
					resume: action.payload
				}
			};
		})
		.addCase(AddSectionResumeAction, (state, action) => {
			return {
				...state,
				selectedResume: {
					...state.selectedResume,
					resume: {
						...state.selectedResume.resume,
						sections: [...state.selectedResume.resume.sections, action.payload]
					}
				}
			};
		})
);
