import {Slide} from "../store/TypesPresentation"

// шрифт
function setFontSize(slide: Slide, NewfontSize: number | string): Slide {
    return{
      ...slide,
     fontSize: NewfontSize 
    }
    
  }
  export{setFontSize}