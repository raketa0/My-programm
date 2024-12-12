import { useState, useRef } from 'react';
import { dispatch } from '../../store/editor';
import { EditorType } from '../../store/editorType';
import { moveElementOnSlide } from '../../store/moveElementOnSlide';

type UseDragAndDropElementProps = {
  slideId: string;
};

function useDragAndDropElement({ slideId }: UseDragAndDropElementProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedElementId, setDraggedElementId] = useState<string | null>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });

  function handleElementMouseDown(event: React.MouseEvent, elementId: string): void {
    event.preventDefault();
    setIsDragging(true);
    setDraggedElementId(elementId);
    dragStartPos.current = { x: event.clientX, y: event.clientY };

    // Получаем начальные координаты элемента
    dispatch((currentEditor: EditorType) => {
      const slide = currentEditor.presentation.slides.find(s => s.id === slideId);
      const element = slide?.elements.find(e => e.id === elementId);
      if (element) {
        elementStartPos.current = { x: element.pos.x, y: element.pos.y };
      }
      return currentEditor;
    });
  }

  function handleElementMouseMove(event: React.MouseEvent): void {
    if (!isDragging || !draggedElementId) {
      return;
    }

    const deltaX = event.clientX - dragStartPos.current.x;
    const deltaY = event.clientY - dragStartPos.current.y;

    dispatch((currentEditor: EditorType) => {
      const slide = currentEditor.presentation.slides.find(s => s.id === slideId);
      if (!slide) return currentEditor;

      const element = slide.elements.find(el => el.id === draggedElementId);
      if (!element) return currentEditor;

      const newX = Math.max(0, Math.min(elementStartPos.current.x + deltaX, 935 - element.size.width));
      const newY = Math.max(0, Math.min(elementStartPos.current.y + deltaY, 525 - element.size.height));

      return moveElementOnSlide(currentEditor, slideId, draggedElementId, newX, newY);
    });
  }

  function handleElementMouseUp(): void {
    setIsDragging(false);
    setDraggedElementId(null);
  }

  return {
    isDragging,
    handleElementMouseDown,
    handleElementMouseMove,
    handleElementMouseUp,
  };
}

export { useDragAndDropElement };