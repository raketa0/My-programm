/* eslint-disable */
import { EditorType } from "./editorType";
import { SolidBackgroud } from "./TypesPresentation";

export function changeSlideBackroud(SlideColor: EditorType, payload?: Object): EditorType
{
    if (!SlideColor.selection || !SlideColor.selection.selectedSlideId)
    {
        return SlideColor;
    }

    const updateSlides = SlideColor.presentation.slides.map(SlideO => {
        if (SlideO.id === SlideColor.selection?.selectedSlideId) {
            return {
                ...SlideO,
                background: payload as SolidBackgroud,
            };
        }
        return SlideO;
    });

    return {
        ...SlideColor,
        presentation: {
            ...SlideColor.presentation,
            slides: updateSlides,
        }
    }
}