import {Slide} from "../store/TypesPresentation"
//удалить картинку
function deleteImage(slide: Slide, elementId: string): Slide {
    return {
      ...slide,
      
      elements: slide.elements.filter(image => image.id !== elementId)
    };
    
}
export{deleteImage}