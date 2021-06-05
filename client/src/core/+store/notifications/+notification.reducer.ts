import { createReducer } from '@reduxjs/toolkit';
import { CreateNotificationAction } from './+actions.types';

type NotificationsState = {
	all: any[];
};

const initialState: NotificationsState = {
	all: []
};

export const NotificationReducer = createReducer<NotificationsState>(initialState, (builder) =>
	builder.addCase(CreateNotificationAction, (state, action) => {
		return {
			...state,
			notifications: [...state.all, action.payload]
		};
	})
);
