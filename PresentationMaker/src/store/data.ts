import { Slide, Presentation } from "./TypesPresentation";

const Slide1: Slide = {
          id: "slide1",
          elements: [
            {
                id: 'text-1',
                type: 'SlideText',
                size: {width: 400, height: 10},
                pos: {x: 20, y: 50},
                value: 'Это моя первая презентация',
                fontFamily: 'Arial',
                fontSize: 27
            },
            {
                id: 'text-2',
                type: 'SlideText',
                pos: {x: 100, y: 100},
                size: {width: 400, height: 10},
                value: 'я ее писал до утра',
                fontFamily: 'Arial',
                fontSize: 20,
            },
            {
                id: 'image-1',
                src: 'src/store/p.png',
                pos: {x: 20, y: 250},
                size: {width: 200, height: 130},
                type: 'SlideImage', 
                value: 'sdfs',
                fontSize: 20
            },
            ],
            background: {
                type: 'solid',
                color: '#565656'
            },
            fontSize: 12,
        }

const Slide2: Slide = {
    id: "slide2",
    elements: [],
    background: {
        type: 'solid',
        color: '#333333'
    },
    fontSize: 12,
}


const presentation: Presentation = {
    title: 'Тупая презентация',
    slides: [
        Slide1, 
        Slide2,
    ]
}
import { EditorType } from "./editorType";
const editor: EditorType = {
    presentation,
    selection: {
        selectedSlideId: presentation.slides[1].id,
        selectedObjectId: null,
    }
}

export {
    editor,
}
