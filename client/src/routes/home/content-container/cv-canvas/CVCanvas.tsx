import React, { FC, useState } from 'react';
import './CVCanvas.scss';
import '../../../../../node_modules/react-grid-layout/css/styles.css';
import GridLayout from 'react-grid-layout';
import { layoutItem, ResumeModel } from '../../../../core/models/resume/resume.model';
import { SectionModel } from '../../../../core/models/section/section.model';

interface Props {
	resume?: ResumeModel;
}

export const CVCanvas: FC<Props> = ({ resume }) => {
	const [clientWidth, setClientWidth] = useState(window.innerWidth);

	function renderSectionsDOM(sections: SectionModel[]) {
		return sections.map((section) => {
			return (
				<div key={section.id} className={'section-container'}>
					<div className={'resume-title'}>{section.title}</div>
					{section.contentList.map((p, idx) => (
						<div key={idx}>{p.body}</div>
					))}
				</div>
			);
		});
	}

	function generateLayout(resume): layoutItem[] {
		return resume.sections.map((item) => {
			const currentDimensions = resume && resume.layoutItems.find(({ i }) => i === item.id);
			return {
				i: item.id,
				x: currentDimensions ? currentDimensions.x : 0,
				y: currentDimensions ? currentDimensions.y : 0,
				w: currentDimensions && currentDimensions.w >= 4 ? currentDimensions.w : 4,
				h: currentDimensions && currentDimensions.h >= 4 ? currentDimensions.h : 4,
				minW: 4,
				minH: 4,
				resizeHandles: ['se']
			};
		});
	}

	if (!resume) {
		return <div>Empty canvas</div>;
	}

	return (
		<div className={'cv-canvas'}>
			<GridLayout
				layout={generateLayout(resume)}
				className={'cv-layout'}
				width={clientWidth - clientWidth / 5 - 25}
				rowHeight={30}
				draggableHandle={'.resume-title'}
			>
				{renderSectionsDOM(resume.sections)}
			</GridLayout>
		</div>
	);
};
