import { SectionModel } from './section.model';

type ContentP = {
	title?: string;
	date?: string;
	location?: string;
	position?: string;
	body?: string;
};

export class ExperienceSectionModel extends SectionModel<ContentP> {
	constructor(title = '') {
		super(title);
	}
}
