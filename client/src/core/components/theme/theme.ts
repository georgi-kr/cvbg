import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		background: {
			default: '#303030',
		},
		primary: {
			main: '#0097a7',
		},
		secondary: {
			main: '#dc004e',
		},
	},
	typography: {
		fontFamily: ['Open Sans', 'Sans-serif'].join(','),
	},
});

export const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		background: {
			default: '#fff',
		},
		primary: {
			main: '#f50057',
			contrastText: '#fff',
		},
		secondary: {
			main: '#2196f3',
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: ['Open Sans', 'Sans-serif'].join(','),
	},
});
