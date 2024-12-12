import { EditorType } from "./editorType"; 

export function deleteObject(ObjSlide: EditorType): EditorType
{
    if (!ObjSlide.selection) {
        return ObjSlide;
    }

    const selectedSlideId = ObjSlide.selection.selectedSlideId;
    const delObjectId = ObjSlide.selection.selectedObjectId;
    const newSlide = ObjSlide.presentation.slides.find(SlideO => SlideO.id === selectedSlideId);

    if (!newSlide) {
        return ObjSlide;
    }

    const newContent = newSlide.elements.filter(elements => elements.id !== delObjectId);
    const newSelectedObjectId = null;

    return {
        ...ObjSlide,
        presentation: {
            ...ObjSlide.presentation,
            slides: ObjSlide.presentation.slides.map(SlideO =>
                SlideO.id === selectedSlideId ? {
                    ...SlideO,
                    elements: newContent,
                } : SlideO
            ),
        },
        selection: {
            selectedSlideId: selectedSlideId,
            selectedObjectId: newSelectedObjectId,
        },
    };
}