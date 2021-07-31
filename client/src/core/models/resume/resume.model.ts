import { v4 } from 'uuid';
import { SectionModel } from '../section/section.model';

export type LayoutItem = {
	i: string;
	x: number;
	y: number;
	w: number;
	h: number;
};

export class ResumeModel {
	public id: string;
	public name: string;
	public sections?: SectionModel[];
	public layoutItems?: LayoutItem[];

	constructor({ name = '', sections = [], id = v4(), layoutItems = [] }) {
		this.id = id;
		this.name = name;
		this.sections = sections;
		// in case of duplicating resume
		this.layoutItems = layoutItems;
	}
}
