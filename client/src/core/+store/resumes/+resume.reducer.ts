import { createReducer } from '@reduxjs/toolkit';
import { AddSectionResumeAction, CreateResumeAction, SaveResumeAction, SelectResumeAction } from './+actions.types';

type ResumesState = {
	all: any[];
	selectedResumeId: string;
};

const initialState: ResumesState = {
	all: [],
	selectedResumeId: ''
};

export const ResumeReducer = createReducer<ResumesState>(
	initialState,
	(builder) =>
		builder
			.addCase(CreateResumeAction, (state, action) => {
				return {
					...state,
					all: [...state.all, action.payload]
				};
			})
			.addCase(SelectResumeAction, (state, action) => {
				return {
					...state,
					selectedResumeId: action.payload
				};
			})
			.addCase(SaveResumeAction, (state, action) => {
				return {
					...state,
					all: state.all.map((resume) => {
						if (resume.id === action.payload.id) {
							return action.payload;
						}
						return resume;
					})
				};
			})
	// .addCase(AddSectionResumeAction, (state, action) => {
	// 	return {
	// 		...state,
	// 		selectedResume: {
	// 			...state.selectedResume,
	// 			resume: {
	// 				...state.selectedResume.resume,
	// 				sections: [...state.selectedResume.resume.sections, action.payload]
	// 			}
	// 		}
	// 	};
	// })
);
