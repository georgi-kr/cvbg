import { createAction } from '@reduxjs/toolkit';

const PARENT = 'RESUME';
export const CREATE_RESUME = `[${PARENT}] CREATE`;
export const SELECT_RESUME = `[${PARENT}] SELECT`;
export const SAVE_RESUME = `[${PARENT}] SAVE`;
export const ADD_SECTION = `[${PARENT}] ADD SECTION`;
//const GET_RESUMES = 'GET_RESUMES';

export const CreateResumeAction = createAction<any>(CREATE_RESUME);
export const SelectResumeAction = createAction<any>(SELECT_RESUME);
export const SaveResumeAction = createAction<any>(SAVE_RESUME);
export const AddSectionResumeAction = createAction<any>(ADD_SECTION);
