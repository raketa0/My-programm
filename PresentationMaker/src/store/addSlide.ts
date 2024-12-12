import { Slide } from "../store/TypesPresentation"
import { EditorType } from "./editorType";
import { generateRandomId } from "./generateID";
//доб слайд 
function addSlide(NewPresentation: EditorType): EditorType {
  const newSlide: Slide = {
    id: generateRandomId(6),
    elements: [],
    background: {
                  type: 'solid',
                  color: '#969000'
    },
    fontSize: 12
  }
  const selectedSlideindex = NewPresentation.presentation.slides.findIndex(SlideO => SlideO.id == NewPresentation.selection?.selectedSlideId);
    return{
        presentation:{
          ...NewPresentation.presentation,
            slides: [...NewPresentation.presentation.slides.slice(0, selectedSlideindex + 1), 
              newSlide,
            ...NewPresentation.presentation.slides.slice(selectedSlideindex + 1)]
        },
        selection: NewPresentation.selection
       
    }
  }

export{addSlide}