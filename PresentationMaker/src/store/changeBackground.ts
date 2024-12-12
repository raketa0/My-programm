
//изм фона    
import { EditorType } from "./editorType";
import { Background } from "./TypesPresentation"; 

export function changeSlideBgrImage(BgrImage: EditorType, payload?: Background): EditorType
{
    

    if (!BgrImage.selection || !BgrImage.selection.selectedSlideId)
    {
        return BgrImage;
    }

    const updatedSlides = BgrImage.presentation.slides.map(SlideO => {
        if (SlideO.id === BgrImage.selection?.selectedSlideId)
        {
            return {
                ...SlideO,
                background: payload,
            };
        }
        return SlideO;
    });

    return {
        ...BgrImage,
        presentation: {
            ...BgrImage.presentation,
            slides: updatedSlides,
        }
    };
}