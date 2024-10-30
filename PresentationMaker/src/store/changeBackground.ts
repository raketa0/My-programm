import {Slide} from "../store/TypesPresentation"

//изм фона    
function changeBackground(slide: Slide, Newbackground: string): Slide {
    return{
      ...slide,
     background: Newbackground 
    }
  }

  export{changeBackground}