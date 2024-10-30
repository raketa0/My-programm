import { Presentation} from "../store/TypesPresentation"
//изм названия
function changeTitle(presentation: Presentation, newTitle: string): Presentation {
    return {
      ...presentation,
      title: newTitle,
    }
  }

  export{changeTitle}

