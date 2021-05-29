import React, { useContext } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { LanguageContext } from '../language.context';
import { languageOptions } from '../languages';

export const LanguageSelector = () => {
	const { userLanguage, userLanguageChange } = useContext(LanguageContext);

	const handleLanguageChange = (
		e: React.ChangeEvent<{
			name?: string;
			value: unknown;
		}>
	) => userLanguageChange(e.target.value as string);

	return (
		<Select variant={'outlined'} onChange={(e) => handleLanguageChange(e)} value={userLanguage}>
			{Object.entries(languageOptions).map(([id, name]) => (
				<MenuItem key={id} value={id}>
					{name}
				</MenuItem>
			))}
		</Select>
	);
};
