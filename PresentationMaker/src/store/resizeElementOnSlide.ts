import { EditorType } from './editorType'; // Импортируйте тип состояния редактора
import { SlideElement } from './TypesPresentation'; // Импортируйте тип элемента слайда

export function resizeElementOnSlide(
  currentEditor: EditorType,
  slideId: string,
  elementId: string,
  newWidth: number,
  newHeight: number,
  newX: number,
  newY: number
): EditorType {
  const slide = currentEditor.presentation.slides.find(s => s.id === slideId);

  if (!slide) return currentEditor; // Если слайд не найден, возвращаем текущее состояние

  const element = slide.elements.find(el => el.id === elementId);

  if (!element) return currentEditor; // Если элемент не найден, возвращаем текущее состояние

  // Обновляем свойства элемента, меняя только размеры и оставляя позицию
  const updatedElement: SlideElement = {
    ...element,
    pos: { x: newX, y: newY }, // Устанавливаем новые координаты
    size: {
      width: newWidth,
      height: newHeight,
    }
  };

  // Создаем новый массив элементов с обновленным элементом
  const updatedElements = slide.elements.map(el => el.id === elementId ? updatedElement : el);

  // Создаем новый слайд с обновленными элементами
  const updatedSlide = {
    ...slide,
    elements: updatedElements,
  };

  // Возвращаем новое состояние редактора с обновленным слайдом
  return {
    ...currentEditor,
    presentation: {
      ...currentEditor.presentation,
      slides: currentEditor.presentation.slides.map(s => s.id === slideId ? updatedSlide : s),
    },
  };
}