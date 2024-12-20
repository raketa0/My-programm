// изм поз сл
import { EditorType } from "./editorType";

function moveSlide(editor: EditorType, draggedSlideId: string, targetSlideId: string): EditorType {
  const { presentation, selection } = editor;
  const { slides } = presentation;

  const draggedIndex = slides.findIndex(slide => slide.id === draggedSlideId);
  const targetIndex = slides.findIndex(slide => slide.id === targetSlideId);

  if (draggedIndex === -1 || targetIndex === -1 || draggedIndex === targetIndex) {
    return editor;
  }

  const newSlides = [...slides];
  const [draggedSlide] = newSlides.splice(draggedIndex, 1);
  newSlides.splice(targetIndex, 0, draggedSlide);

  return {
    presentation: {
      ...presentation,
      slides: newSlides,
    },
    selection: selection,
  };
}

export { moveSlide };