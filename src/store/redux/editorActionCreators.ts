import { EditorType } from "../editorType";
import { ActionType } from "./actions";

function setEditor(newEditor: EditorType) {
    return {
        type: ActionType.SET_EDITOR,
        payload: newEditor,
    }
}

export {
    setEditor,
}