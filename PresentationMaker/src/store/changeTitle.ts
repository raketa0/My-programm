import { EditorType } from "./editorType" 
//изм названия
function changeTitle(PresentationTitel: EditorType, newTitle: string): EditorType {
    return {
      ...PresentationTitel,
      presentation:
      {
        ...PresentationTitel.presentation,
        title: newTitle,
      }
    }
  }

  export{changeTitle}

