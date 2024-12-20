import { uuidV4 } from "../../utils/uuidV4";
import { Slide } from "../TypesPresentation";

function createNewSlide(): Slide {
    return {
        id: uuidV4(),
        elements: [],
        background: {
            type: 'solid',
            color: '#333333'
        },
        fontSize: 12,
    }
}

export {
    createNewSlide,
}