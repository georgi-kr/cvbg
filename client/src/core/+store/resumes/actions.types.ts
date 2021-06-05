import { createAction } from '@reduxjs/toolkit';

export const CREATE_RESUME_REQUEST = 'CREATE_RESUME_REQUEST';
export const CREATE_RESUME_SUCCESS = 'CREATE_RESUME_SUCCESS';
export const CREATE_RESUME_FAILURE = 'CREATE_RESUME_FAILURE';
//const GET_RESUMES = 'GET_RESUMES';

export const CreateResumeRequest = createAction<any>(CREATE_RESUME_REQUEST);
export const CreateResumeSuccessAction = createAction<any>(CREATE_RESUME_SUCCESS);
export const CreateResumeFailureAction = createAction<string>(CREATE_RESUME_FAILURE);
