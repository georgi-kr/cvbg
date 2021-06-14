import { v4 } from 'uuid';

type ContentP = {
	title?: string;
	body?: string;
	date?: string;
};

export class SectionModel {
	id: string;
	title: string;
	contentList: ContentP[];

	constructor(title = '', contentList = []) {
		this.id = v4();
		this.title = title;
		this.contentList = contentList;
	}
}
