import { Presentation } from "../store/TypesPresentation";

export type SelectionType = {
    selectedSlideId: string,
}

export type EditorType = {
    presentation: Presentation,
    selection: SelectionType | null,
}