import { useContext } from 'react';
import { LanguageContext } from './language.context';

export const text = (tid: string | string[]): string => {
	const languageContext = useContext(LanguageContext);
	if (typeof tid === 'string') {
		return languageContext.dictionary[tid] || tid;
	} else if (tid.length > 0) {
		return tid
			.map((word) => {
				return languageContext.dictionary[word] || word;
			})
			.join(' ');
	}
};
