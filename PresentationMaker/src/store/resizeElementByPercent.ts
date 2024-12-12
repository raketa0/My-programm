import {Slide} from "../store/TypesPresentation"

// изм раз картинки
function resizeElementByPercent(slide: Slide,elementId: string, NewWidth: number, Newheight: number): Slide {
    return {
      ...slide,
      elements: slide.elements.map((img) => {
        if (img.id === elementId) {
          return {
            ...img,
            width: NewWidth,
            height: Newheight,
          }
        }
        return img;
      })
    }
  }
  export{resizeElementByPercent}