import {Slide} from "../store/TypesPresentation"
// изм размера текста
function resizeElementByPixels(slide: Slide,elementId: string, Newsize: number): Slide {
    return {
     ...slide,
     elements: slide.elements.map((txt) => {
       if (txt.id === elementId) {
         return {
           ...txt,
           fontSize: Newsize,
         }
       }
       return txt;
     })
   }
 
   }
   export{resizeElementByPixels}