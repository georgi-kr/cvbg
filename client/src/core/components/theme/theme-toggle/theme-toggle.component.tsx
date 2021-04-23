import React, { useContext } from 'react';
import Brightness6TwoToneIcon from '@material-ui/icons/Brightness6TwoTone';
import { Button } from '@material-ui/core';
import { ThemeContext } from '../theme.context';
import { darkTheme, lightTheme } from '../theme';

export const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const isLight = theme === lightTheme;

	const toggleTheme = () => {
		if (isLight) {
			setTheme(darkTheme);
		} else {
			setTheme(lightTheme);
		}
	};

	return (
		<Button onClick={toggleTheme}>
			<Brightness6TwoToneIcon />
		</Button>
	);
};
