import { SectionModel } from './section.model';

type ContentP = {
	title?: string;
	date?: string;
	location?: string;
	position?: string;
};

export class EducationSectionModel extends SectionModel<ContentP> {
	constructor(title = '', contentList = []) {
		super(title, contentList);
	}
}
