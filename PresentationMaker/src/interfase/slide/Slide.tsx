import { Slide } from "../../store/TypesPresentation";
import { TextObject } from "./TextObject";
import { ImageObject } from "./ImageObject";
import styles from './Slide.module.css';
import { CSSProperties } from "react";
import { dispatch } from "../../store/editor"; 
import { setSelection } from "../../store/setSelection"; 
import { useDragAndDropElement } from "../Hooks/useDragAndDropElement";
import { useResizeElement } from "../Hooks/useResizeElement"; 

const Slide_Width = 935;
const Slide_Height = 525;

type SlideProps = {
  slide: Slide | null;
  scale?: number;
  isSelected: boolean;
  className: string;
  selectedObjectId: string | null;
  showResizeHandles?: boolean;
};

function SlideO({ 
  slide, 
  scale = 1, 
  isSelected, 
  className, 
  selectedObjectId,
  showResizeHandles = true 
}: SlideProps) {
  const { isDragging, handleElementMouseDown, handleElementMouseMove, handleElementMouseUp } = useDragAndDropElement({ slideId: slide?.id ?? '' });
  const { isResizing, handleResizeMouseDown, handleResizeMouseMove, handleResizeMouseUp } = useResizeElement({ slideId: slide?.id ?? '' });

  function onObjectClick(objectId: string): void {
    dispatch(setSelection, {
      selectedSlideId: slide?.id,
      selectedObjectId: objectId,
    });
  }

  if (slide == null) {
    return <></>;
  }

  const slideStyles: CSSProperties = {
    backgroundColor: slide.background?.type === 'solid' ? slide.background.color : 'transparent',
    backgroundImage: slide.background?.type === 'image' ? `url(${slide.background.src})` : 'none',
    backgroundSize: 'cover',
    position: 'relative',
    width: `${Slide_Width * scale}px`,
    height: `${Slide_Height * scale}px`,
    zIndex: 1,
  };

  if (isSelected) {
    slideStyles.border = '3px solid #0b57d0';
  }

  return (
    <div
      style={slideStyles}
      className={`${styles.slide} ${className}`}
      onMouseMove={(event) => {
        if (isResizing) {
          handleResizeMouseMove(event);
        } else {
          handleElementMouseMove(event);
        }
      }}
      onMouseUp={() => {
        handleElementMouseUp();
        handleResizeMouseUp();
      }}
      onMouseLeave={handleResizeMouseUp}
      onClick={() => handleResizeMouseUp()}
    >
      {slide.elements.map(SlideElement => {
        const isSelectedElement = SlideElement.id === selectedObjectId;

        return (
          <div
            key={SlideElement.id}
            onClick={() => onObjectClick(SlideElement.id)}
            onMouseDown={(event) => handleElementMouseDown(event, SlideElement.id)}
            style={{ position: 'relative' }}
          >
            {SlideElement.type === "SlideText" && (
              <TextObject
                textObject={SlideElement}
                scale={scale}
                isSelected={isSelectedElement}
              />
            )}
            {SlideElement.type === "SlideImage" && (
              <ImageObject
                imageObject={SlideElement}
                scale={scale}
                isSelected={isSelectedElement}
              />
            )}
            {isSelectedElement && showResizeHandles && (
              <>
                <div className={`${styles.resizeHandle} ${styles.topLeft}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'top-left')}
                     style={{ position: 'absolute', top: SlideElement.pos.y, left: SlideElement.pos.x }} />
                <div className={`${styles.resizeHandle} ${styles.topRight}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'top-right')}
                     style={{ position: 'absolute', top: SlideElement.pos.y, left: SlideElement.pos.x + SlideElement.size.width }} />
                <div className={`${styles.resizeHandle} ${styles.bottomLeft}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'bottom-left')}
                     style={{ position: 'absolute', top: SlideElement.pos.y + SlideElement.size.height, left: SlideElement.pos.x }} />
                <div className={`${styles.resizeHandle} ${styles.bottomRight}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'bottom-right')}
                     style={{ position: 'absolute', top: SlideElement.pos.y + SlideElement.size.height - 5, left: SlideElement.pos.x + SlideElement.size.width - 5 }} />
                <div className={`${styles.resizeHandle} ${styles.middleLeft}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'middle-left')}
                     style={{ position: 'absolute', top: SlideElement.pos.y + SlideElement.size.height / 2 , left: SlideElement.pos.x  }} />
                <div className={`${styles.resizeHandle} ${styles.middleRight}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'middle-right')}
                     style={{ position: 'absolute', top: SlideElement.pos.y + SlideElement.size.height / 2 , left: SlideElement.pos.x + SlideElement.size.width}}/>
                <div className={`${styles.resizeHandle} ${styles.topMiddle}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'top-middle')}
                     style={{ position: 'absolute', top: SlideElement.pos.y, left: SlideElement.pos.x + SlideElement.size.width / 2 }} />
                <div className={`${styles.resizeHandle} ${styles.bottomMiddle}`} 
                     onMouseDown={(event) => handleResizeMouseDown(event, SlideElement.id, 'bottom-middle')}
                     style={{ position: 'absolute', top: SlideElement.pos.y + SlideElement.size.height, left: SlideElement.pos.x + SlideElement.size.width / 2 }} />
              </>
            )}
          </div>
        );
      })}
      {isDragging && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)' 
        }} />
      )}
      {isResizing && (
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(255, 0, 0, 0.5)' 
        }} />
      )}
    </div>
  );
}

export { SlideO };
                