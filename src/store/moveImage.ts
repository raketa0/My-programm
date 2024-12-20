import {Slide} from "../store/TypesPresentation"
// изм поз  картинки

function moveImage(slide: Slide,elementId: string, Newx: number, Newy: number): Slide {
      return {
        ...slide,
        elements: slide.elements.map((img) => {
          if (img.id === elementId) {
            return {
              ...img,
              x: Newx,
              y: Newy,
            }
          }
          return img;
        })
      }
  
  }
  export{moveImage}