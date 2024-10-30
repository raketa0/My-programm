import {Slide, Image} from "../store/TypesPresentation"
//добавить изображение

function setImage(slide: Slide, Newimages: Image): Slide {
    return{
      ...slide,
      elements: [...slide.elements, Newimages],
    }
  }
  export{setImage}