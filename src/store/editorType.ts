import { Presentation } from "../store/TypesPresentation";

export type SelectionType = {
    selectedSlideId: string | null,
    selectedObjectId: string | null,
}

export type EditorType = {
    presentation: Presentation,
    selection?: SelectionType,
}