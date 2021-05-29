import { v4 } from 'uuid';
import { SectionModel } from '../section/section.model';

export class ResumeModel {
	public id: string;
	public name: string;
	public sections: any[];

	constructor({ name = '', sections = [], id = v4() }) {
		this.id = id;
		this.name = name;
		this.sections = sections;
	}
}
