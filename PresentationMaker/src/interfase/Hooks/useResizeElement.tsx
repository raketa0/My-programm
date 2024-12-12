import { useState, useRef } from 'react';
import { dispatch } from '../../store/editor';
import { EditorType } from '../../store/editorType';
import { resizeElementOnSlide } from '../../store/resizeElementOnSlide'; // Импортируем функцию изменения размера

type UseResizeElementProps = {
  slideId: string;
};

function useResizeElement({ slideId }: UseResizeElementProps) {
  const [isResizing, setIsResizing] = useState(false);
  const [resizedElementId, setResizedElementId] = useState<string | null>(null);
  const startSize = useRef({ width: 0, height: 0 });
  const startMousePos = useRef({ x: 0, y: 0 });
  const initialPosition = useRef({ x: 0, y: 0 });
  const resizeDirection = useRef<string | null>(null);

  function handleResizeMouseDown(event: React.MouseEvent, elementId: string, direction: string): void {
    event.preventDefault();
    setIsResizing(true);
    setResizedElementId(elementId);
    resizeDirection.current = direction;
    startMousePos.current = { x: event.clientX, y: event.clientY };

    dispatch((currentEditor: EditorType) => {
      const slide = currentEditor.presentation.slides.find(s => s.id === slideId);
      const element = slide?.elements.find(e => e.id === elementId);
      if (element) {
        startSize.current = { width: element.size.width, height: element.size.height };
        initialPosition.current = { x: element.pos.x, y: element.pos.y };
      }
      return currentEditor;
    });
  }

  function handleResizeMouseMove(event: React.MouseEvent): void {
    if (!isResizing || !resizedElementId) {
      return;
    }

    const deltaX = event.clientX - startMousePos.current.x;
    const deltaY = event.clientY - startMousePos.current.y;

    let newWidth = startSize.current.width;
    let newHeight = startSize.current.height;
    let newX = initialPosition.current.x;
    let newY = initialPosition.current.y;

    switch (resizeDirection.current) {
      case 'top-left':
        // При изменении через верхний левый угол:
        // 1. Изменяем позицию X и Y
        // 2. Изменяем размеры противоположно смещению
        newX = initialPosition.current.x + deltaX;
        newY = initialPosition.current.y + deltaY;
        newWidth = Math.max(10, startSize.current.width - deltaX);
        newHeight = Math.max(10, startSize.current.height - deltaY);
        break;
        
      case 'top-right':
        newY = initialPosition.current.y + deltaY;
        newWidth = Math.max(10, startSize.current.width + deltaX);
        newHeight = Math.max(10, startSize.current.height - deltaY);
        break;
        
      case 'bottom-left':
        newX = initialPosition.current.x + deltaX;
        newWidth = Math.max(10, startSize.current.width - deltaX);
        newHeight = Math.max(10, startSize.current.height + deltaY);
        break;
        
      case 'bottom-right':
        newWidth = Math.max(10, startSize.current.width + deltaX);
        newHeight = Math.max(10, startSize.current.height + deltaY);
        break;
        
      case 'middle-left':
        newX = initialPosition.current.x + deltaX;
        newWidth = Math.max(10, startSize.current.width - deltaX);
        break;
        
      case 'middle-right':
        newWidth = Math.max(10, startSize.current.width + deltaX);
        break;
        
      case 'top-middle':
        newY = initialPosition.current.y + deltaY;
        newHeight = Math.max(10, startSize.current.height - deltaY);
        break;
        
      case 'bottom-middle':
        newHeight = Math.max(10, startSize.current.height + deltaY);
        break;
    }

    dispatch((currentEditor: EditorType) => {
      return resizeElementOnSlide(
        currentEditor,
        slideId,
        resizedElementId,
        newWidth,
        newHeight,
        newX,
        newY
      );
    });
  }

  function handleResizeMouseUp(): void {
    setIsResizing(false);
    setResizedElementId(null);
    resizeDirection.current = null;
  }

  return {
    isResizing,
    handleResizeMouseDown,
    handleResizeMouseMove,
    handleResizeMouseUp,
  };
}

export { useResizeElement };