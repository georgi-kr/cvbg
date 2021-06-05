import { createAction } from '@reduxjs/toolkit';

const PARENT = 'RESUME';
export const CREATE_RESUME = `[${PARENT}] CREATE`;
export const SELECT_RESUME = `[${PARENT}] SELECT`;
//const GET_RESUMES = 'GET_RESUMES';

export const CreateResumeAction = createAction<any>(CREATE_RESUME);
export const SelectResumeAction = createAction<any>(SELECT_RESUME);
