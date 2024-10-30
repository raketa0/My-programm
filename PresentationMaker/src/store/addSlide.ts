import { Presentation, Slide } from "../store/TypesPresentation"
//доб слайд 
function addSlide(presentation: Presentation, Newslide: Slide): Presentation {
    return{
      ...presentation,
      slides: [...presentation.slides, Newslide],
    }
  }

export{addSlide}