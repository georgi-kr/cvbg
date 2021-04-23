import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import { lightTheme } from '../theme';
import { ThemeContext } from '../theme.context';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

export const CustomThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState(lightTheme);
	const provider = {
		theme,
		setTheme,
	};

	return (
		<ThemeContext.Provider value={provider}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};
