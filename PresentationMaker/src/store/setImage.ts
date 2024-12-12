import { EditorType } from "./editorType"
import { Image } from "../store/TypesPresentation"
import { generateRandomId } from "./generateID"
//добавить изображение

function setImage(slideImg: EditorType): EditorType {
  const image = 'src/store/p.png';
  if (!slideImg.selection || !slideImg.selection.selectedSlideId) {
      return slideImg;
  }

  const newImage: Image = {
    id: generateRandomId(6),
    src: image,
    pos: {
        x: 400,
        y: 300,
    },
    size: {
        width: 200,
        height: 200,
    },
    type: 'SlideImage',
    fontSize: 14,
    value: 'Введите ссылку на изображение'
  }

  const updatedSlides = slideImg.presentation.slides.map(SlideO => {
      if (SlideO.id === slideImg.selection?.selectedSlideId) {
          return {
              ...SlideO,
              elements: [...SlideO.elements, newImage],
          };
      }
      return SlideO;
  })

  return {
      ...slideImg,
      presentation: {
          ...slideImg.presentation,
          slides: updatedSlides,
      }
  }
  }
  export{setImage}