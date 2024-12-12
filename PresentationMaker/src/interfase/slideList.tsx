
import { SlidesCollection } from "../store/TypesPresentation";
import { SlideO } from "./slide/Slide";
import './slide.module.css'
import { SelectionType } from "../store/editorType";
import { dispatch } from "../store/editor";
import { setSelection } from "../store/setSelection";
import { useDragAndDropSlide } from './Hooks/useDragAndDropSlide';

const Slide_Preview_Scale = 0.2;

type SlideListProps = {
    slides: SlidesCollection;
    selection: SelectionType;
};

function SlideList({ slides, selection }: SlideListProps) {
    const {
        draggingSlide,
        dragOverSlide,
        handleDragStart,
        handleDragOver,
        handleDragEnd,
    } = useDragAndDropSlide();

    function onSlideClick(slideId: string) {
        dispatch(setSelection, { selectedSlideId: slideId });
    }

    return (
        <div className="slideList">
            {slides.map(slide =>
                <div
                    key={slide.id}
                    draggable
                    onDragStart={() => handleDragStart(slide.id)}
                    onDragOver={(e) => handleDragOver(e, slide.id)}
                    onDragEnd={handleDragEnd}
                    onClick={() => onSlideClick(slide.id)}
                    className={draggingSlide === slide.id ? 'dragging' : (dragOverSlide === slide.id ? 'dragover' : '')}
                >
                    <SlideO
                        slide={slide}
                        scale={Slide_Preview_Scale}
                        isSelected={selection ? slide.id === selection.selectedSlideId : false}
                        className="item"
                        selectedObjectId={selection?.selectedObjectId}
                        showResizeHandles={false}
                    />
                </div>
            )}
        </div>
    );
}

export { SlideList };