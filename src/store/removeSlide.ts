import { EditorType } from "./editorType"; 
// удал слайда
function removeSlide(slide: EditorType): EditorType {
  if (!slide.selection) {
    return slide
  }
  
  const delSlideId = slide.selection.selectedSlideId;
  const delSlideIndex = slide.presentation.slides.findIndex(SlideO => SlideO.id === delSlideId);
    const newSlides = slide.presentation.slides.filter(SlideO => SlideO.id !== delSlideId);

    let newSelectedSlideId = null;
    if (newSlides.length > 0) {
        const index = Math.min(delSlideIndex, newSlides.length - 1);
        newSelectedSlideId = newSlides[index].id;
    }

    return {
        ...slide,
        presentation: {
            ...slide.presentation,
            slides: newSlides,
        },
        selection: {
            selectedSlideId: newSelectedSlideId,
            selectedObjectId: slide.selection.selectedObjectId
        },
    };
    }

    export {removeSlide}