
import styles from './slide.module.css'
import { SlideO } from "./slide/Slide";
import './slide.module.css'
import { useDragAndDropSlide } from './Hooks/useDragAndDropSlide';
import { useAppActions } from "./Hooks/useAppAction";
import { useAppSelector } from "./Hooks/useAppSelector";
const Slide_Preview_Scale = 0.2;

function getSlideWrapperClassName(slideId: string, selectedSlideId: string | undefined | null): string {
    let className = styles.slideWrapper
    if (slideId === selectedSlideId) {
        className = `${className} ${styles.selectedSlide}`
    }
    return className
}

function SlideList() {
    const editor = useAppSelector((state) => state);
    const slides = editor.presentation.slides;
    const selection = editor.selection;
  
    const { setSelection } = useAppActions();
  
    const onSlideClick = (slideId: string) => {
      setSelection({
        selectedSlideId: slideId,
        selectedObjectId: null,
      });
    };
  
    const {
      draggingSlide,
      dragOverSlide,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
    } = useDragAndDropSlide();
  
    return (
      <div className={styles.slideList}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            draggable
            onDragStart={() => handleDragStart(slide.id)}
            onDragOver={(e) => handleDragOver(e, slide.id)}
            onDragEnd={handleDragEnd}
            onClick={() => onSlideClick(slide.id)}
            className={`${styles.slideWrapper} ${draggingSlide === slide.id ? styles.dragging : ''} ${dragOverSlide === slide.id ? styles.dragover : ''} ${getSlideWrapperClassName(slide.id, selection?.selectedSlideId)}`}
          >
            <SlideO
              slide={slide}
              scale={Slide_Preview_Scale}
              className={styles.item}
              showResizeHandles={false}
            />
          </div>
        ))}
      </div>
    );
  }
  
  export { SlideList };