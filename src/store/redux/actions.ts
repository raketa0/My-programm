import { EditorType, SelectionType } from "../editorType"

enum ActionType {
    ADD_SLIDE = 'addSlide',
    REMOVE_SLIDE = 'removeSlide',
    SET_SELECTION = 'setSelection',
    SET_EDITOR = 'setEditor',
    SET_TEXT = 'setText',
    SET_IMAGE = 'setImage',
    DELETE_OBJEKT = 'deleteObject',
    CHANGE_SLIDE_BACKROUND = 'changeSlideBackroud',
    CHANGE_SLIDE_BACKROUND_IMAGE = 'changeSlideBgrImage',
    MOVE_SLIDE = 'moveSlide',
    MOVE_ELEMENT = 'moveElement',
    RESIZE_ELEMENT = 'resizeElement',
    SAVE_PRESENTATION = 'savePresentation',
    LOAD_PRESENTATION = 'loadPresentation',
}

type MoveSlideAction = {
    type: ActionType.MOVE_SLIDE;
    payload: {
      editor: EditorType; 
      slideId: string;
      targetSlideId: string;
    };
  };

type MoveElementAction = {
    type: ActionType.MOVE_ELEMENT
    payload: {
        slideId: string;
        elementId: string;
        x: number;
        y: number;
      };
}

type ResizeElementAction = {
    type: ActionType.RESIZE_ELEMENT
    payload: {
        slideId: string;
        elementId: string;
        width: number;
        height: number;
        x: number;
        y: number;
      };
}

type AddSlideAction = {
    type: ActionType.ADD_SLIDE,
}

type RemoveSlideAction = {
    type: ActionType.REMOVE_SLIDE,
}

type SetSelectionAction = {
    type: ActionType.SET_SELECTION,
    payload: SelectionType,
}

type SetEditorAction = {
    type: ActionType.SET_EDITOR,
    payload: EditorType,
}
type SetTextAction = {
    type:ActionType.SET_TEXT,
}
type SetImageAction = {
    type: ActionType.SET_IMAGE,
}
type DeleteObjectAction = {
    type: ActionType.DELETE_OBJEKT
}
type ChangeSlideBackroudAction = {
    type: ActionType.CHANGE_SLIDE_BACKROUND
    payload: { type: 'solid'; color: string }
}
type ChangeSlideBgrImage = {
    type: ActionType.CHANGE_SLIDE_BACKROUND_IMAGE
    payload: { type: 'image'; src: string }
}

type SavePresentationAction = {
    type: ActionType.SAVE_PRESENTATION;
    payload: EditorType;
  };
  
type LoadPresentationAction = {
    type: ActionType.LOAD_PRESENTATION;
    payload: EditorType;
  };

type EditorAction = AddSlideAction | RemoveSlideAction | SetSelectionAction | SetEditorAction | SetTextAction | SetImageAction 
| DeleteObjectAction | ChangeSlideBackroudAction | ChangeSlideBgrImage | MoveSlideAction | MoveElementAction | ResizeElementAction 
| SavePresentationAction | LoadPresentationAction

export {
    ActionType,
    type SetSelectionAction,
    type EditorAction,
}