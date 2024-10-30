import {Slide, Texts} from "../store/TypesPresentation"

 // доб текст
 function setText(slide: Slide, Newtext: Texts): Slide {
    return{
      ...slide,
      elements: [...slide.elements, Newtext],
    }
    
  }

  export {setText};