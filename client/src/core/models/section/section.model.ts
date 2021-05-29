export class SectionModel {
	title: string;
	contentList: any;

	constructor(title = '', contentList = {}) {
		this.title = title;
		this.contentList = contentList;
	}
}
