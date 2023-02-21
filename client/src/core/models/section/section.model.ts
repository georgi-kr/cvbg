import { v4 } from 'uuid';

export class SectionModel<ContentType> {
	private readonly Id: string;
	private ContentList: ContentType[];
	private Title: string;

	constructor(title = '', contentList = []) {
		this.Id = v4();
		this.Title = title;
		this.ContentList = contentList;
	}

	get id(): string {
		return this.Id;
	}

	get title(): string {
		return this.Title;
	}

	set title(newTitle: string) {
		this.Title = newTitle;
	}

	get contentList(): ContentType[] {
		return [...this.ContentList];
	}

	set contentList(newContentList: ContentType[]) {
		this.ContentList = newContentList;
	}

	addContentParagraph(ContentP) {
		this.ContentList = [...this.ContentList, ContentP];
	}
}
