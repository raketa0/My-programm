import {Slide, Texts} from "../store/TypesPresentation"
//вставить текст
function insertText(slide: Slide, SlideElement: Texts): Slide {
    return {
      ...slide,
      elements: [...slide.elements, SlideElement],
  };
  }
  export{insertText}