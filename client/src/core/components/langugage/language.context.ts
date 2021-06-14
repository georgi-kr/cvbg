import { createContext } from 'react';
import { dictionaryList } from './languages';

export const LanguageContext = createContext({
	userLanguage: 'en',
	dictionary: dictionaryList.en,
	translate: (tid: string | string[]): string => tid.toString(),
	userLanguageChange: (selected: string): void => {
		selected;
	}
});
