import {Slide} from "../store/TypesPresentation"

// изм поз  текста
function moveText(slide: Slide, Newx: number, Newy: number,elementId: string): Slide {
    return {
     ...slide,
     elements: slide.elements.map((txt) => {
       if (txt.id === elementId) {
         return {
           ...txt,
           x: Newx,
           y: Newy,
         }
       }
       return txt;
     })
   }
  
  }
  export{moveText}