import { EditorType } from "../editorType";
import { addSlide } from "../addSlide";
import { setSelection } from "../setSelection";
import { ActionType, EditorAction } from "./actions";
import { editors } from "../data";
import { removeSlide } from "../removeSlide";
import { deleteObject } from '../../store/deleteObj'; 
import { changeSlideBackroud } from '../../store/changeSlideBackgroud'; 
import { changeSlideBgrImage } from '../../store/changeBackground';
import { setText } from "../setText";
import { setImage } from "../setImage";
import { moveSlide } from "../moveSlide";
import { moveElementOnSlide } from "../moveElementOnSlide";
import { resizeElementOnSlide } from "../resizeElementOnSlide";
import { saveToLocalStorage, loadFromLocalStorage } from "../../lockalStorage/localStorageUtils";

function editorReducer(editor: EditorType = editors, action: EditorAction): EditorType {
    switch (action.type) {
        case ActionType.ADD_SLIDE: 
            return addSlide(editor)
        case ActionType.REMOVE_SLIDE:
            return removeSlide(editor)
        case ActionType.SET_SELECTION: 
            return setSelection(editor, action)
        case ActionType.SET_EDITOR:
            return action.payload
        case ActionType.SET_TEXT:
            return setText(editor)
        case ActionType.SET_IMAGE:
            return setImage(editor)
        case ActionType.DELETE_OBJEKT:
            return deleteObject(editor)
        case ActionType.CHANGE_SLIDE_BACKROUND:
            return changeSlideBackroud(editor, action.payload)
        case ActionType.CHANGE_SLIDE_BACKROUND_IMAGE:
            return changeSlideBgrImage(editor, action.payload)
            case ActionType.MOVE_SLIDE:
                return moveSlide(action.payload.editor, action.payload.slideId, action.payload.targetSlideId);
        case ActionType.RESIZE_ELEMENT:
            return resizeElementOnSlide(
            editor,
            action.payload.slideId,
            action.payload.elementId,
            action.payload.width,
            action.payload.height,
            action.payload.x,
            action.payload.y
            );
        case ActionType.MOVE_ELEMENT:
            return moveElementOnSlide(
                editor,
                action.payload.slideId,
                action.payload.elementId,
                action.payload.x,
                action.payload.y  
            );
        case ActionType.SAVE_PRESENTATION:
            saveToLocalStorage(action.payload);
            return action.payload;
        case ActionType.LOAD_PRESENTATION:
            return loadFromLocalStorage() ?? editors;

        default:
            return editor
    }
}

export {
    editorReducer,
}