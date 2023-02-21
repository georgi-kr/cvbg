import bg from './bg.json';
import en from './en.json';

export const dictionaryList: { [word: string]: { [word: string]: string } } = { en, bg };

export const languageOptions: { [word: string]: string } = {
	en: 'English',
	bg: 'Български'
};
