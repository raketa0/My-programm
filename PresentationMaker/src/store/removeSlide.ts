import { Presentation} from "../store/TypesPresentation"
// удал слайда
function removeSlide(presentation: Presentation, elementId: string): Presentation {
    return {
      ...presentation,
      
      slides: presentation.slides.filter(slides => slides.id !== elementId)
    };
    }

    export {removeSlide}