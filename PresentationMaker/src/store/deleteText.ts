import {Slide} from "../store/TypesPresentation"
 // удалить текст
 function deleteText(slide: Slide,elementId: string): Slide {
    return {
      ...slide,
      
      elements: slide.elements.filter(text => text.id !== elementId)
    };
  }
  export{deleteText}