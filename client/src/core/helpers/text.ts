import { useContext } from 'react';
import { LanguageContext } from '../components/langugage/language.context';

export const text = (tid: string): string => {
	const languageContext = useContext(LanguageContext);

	return languageContext.dictionary[tid] || tid;
};
