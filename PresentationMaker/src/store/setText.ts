import { EditorType } from "./editorType";
import { generateRandomId } from "./generateID";
import { Texts} from "../store/TypesPresentation"

 // доб текст
 function setText(slideText: EditorType): EditorType {
  
  const newText = "Напиши сюда свой текст";  
  if (!slideText.selection || !slideText.selection.selectedSlideId) {
    return slideText;
  }

  const NewText: Texts = {
    id: generateRandomId(6),
    pos: {
            x: 450,
            y: 450
    },
    size: {
            width: 300,
            height: 45,  
    },
    type: 'SlideText',
    value: newText,
    fontSize: 22,
    fontFamily: 'cursive'
  }
  const updatedSlides = slideText.presentation.slides.map(SlideO => {
    if (SlideO.id === slideText.selection?.selectedSlideId) {
        return {
            ...SlideO,
            elements: [...SlideO.elements, NewText],
        };
    }
    return SlideO;
})



return {
    ...slideText,
    presentation: {
        ...slideText.presentation,
        slides: updatedSlides
    }
};
    
  }

  export {setText};