import React, { Dispatch, FC, MutableRefObject, SetStateAction, useState } from 'react';
import './CVCanvas.scss';
import GridLayout from 'react-grid-layout';
import '../../../../../node_modules/react-grid-layout/css/styles.css';
import { LayoutItem, ResumeModel } from '../../../../core/models/resume/resume.model';
import { SectionType } from '../../../../core/types/section.type';

interface Props {
	resume?: ResumeModel;
	containerRef: MutableRefObject<HTMLDivElement>;
	setSelectedResume: Dispatch<SetStateAction<null | ResumeModel>>;
	reorderItemsMode: boolean;
}

export const CVCanvas: FC<Props> = ({ resume, containerRef, setSelectedResume, reorderItemsMode }) => {
	const [pageDims, setPageDims] = useState({
		w: 1,
		h: 1,
		z: 1
	});

	function resizeCanvas() {
		setPageDims((prevState) => {
			let zoom = 1;
			const width = window.innerWidth - window.innerWidth / 5 - 25;
			const containerWidth = containerRef.current.offsetWidth;
			if (width > containerWidth) {
				zoom = (containerWidth - 100) / width;
			}
			return {
				...prevState,
				w: width,
				h: width * 1.4142,
				z: zoom
			};
		});
	}

	function renderSectionsDOM(sections: SectionType[]) {
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

	function updateLayout(layoutItems: LayoutItem[]) {
		setSelectedResume((prevState) => {
			return {
				...prevState,
				layoutItems: layoutItems
			};
		});
	}

	function generateLayout(resume): LayoutItem[] {
		return resume.sections.map((item) => {
			const currentDimensions = resume && resume.layoutItems.find(({ i }) => i === item.id);
			return {
				i: item.id,
				x: currentDimensions ? currentDimensions.x : 0,
				y: currentDimensions ? currentDimensions.y : 0,
				w: currentDimensions && currentDimensions.w >= 4 ? currentDimensions.w : 4,
				h: currentDimensions && currentDimensions.h >= 4 ? currentDimensions.h : 4
			};
		});
	}

	React.useEffect(() => {
		const resizeObserver = new window.ResizeObserver(() => {
			resizeCanvas();
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, [containerRef.current]);

	if (!resume) {
		return <div>Empty canvas</div>;
	}

	return (
		<div className={'cv-canvas'} style={{ width: pageDims.w * pageDims.z, height: pageDims.h * pageDims.z }}>
			<GridLayout
				layout={generateLayout(resume)}
				className={'cv-layout'}
				width={pageDims.w * pageDims.z}
				rowHeight={30}
				onLayoutChange={updateLayout}
				draggableHandle={'.resume-title'}
				isDraggable={reorderItemsMode}
				resizeHandles={reorderItemsMode ? ['se'] : []}
			>
				{renderSectionsDOM(resume.sections)}
			</GridLayout>
		</div>
	);
};
