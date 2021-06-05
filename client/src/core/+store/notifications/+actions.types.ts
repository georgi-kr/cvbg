import { createAction } from '@reduxjs/toolkit';

const PARENT = 'NOTIFICATION';
export const CREATE_NOTIFICATION = `[${PARENT}] CREATE`;

export const CreateNotificationAction = createAction<any>(CREATE_NOTIFICATION);
