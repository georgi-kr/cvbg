import React, { useState } from 'react';
import { LanguageContext } from '../language.context';
import { dictionaryList, languageOptions } from '../languages';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
	const defaultLanguage = window.localStorage.getItem('rcml-lang');
	const windowLanguage = window.navigator.language || 'en';
	const [userLanguage, setUserLanguage] = useState(defaultLanguage || windowLanguage);

	const provider = {
		userLanguage,
		dictionary: dictionaryList[userLanguage],
		userLanguageChange: (selected: string) => {
			const newLanguage = languageOptions[selected] ? selected : 'en';
			setUserLanguage(newLanguage);
			window.localStorage.setItem('rcml-lang', newLanguage);
		}
	};

	return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>;
};
