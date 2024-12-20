import { EditorType } from "../editorType"
import { ActionType } from "./actions"

function addSlide() {
    return {
        type: ActionType.ADD_SLIDE,
    }
}

function removeSlide() {
    return {
        type: ActionType.REMOVE_SLIDE,
    }
}

function setText() {
    return {
        type: ActionType.SET_TEXT
    }
}

function setImage() {
    return {
        type: ActionType.SET_IMAGE
    }
}

function deleteObject(){
    return {
        type: ActionType.DELETE_OBJEKT
    }
}

function changeSlideBackgroud(payload: { type: 'solid', color: string }) {
    return {
      type: ActionType.CHANGE_SLIDE_BACKROUND,
      payload,
    };
  }
  
  function changeSlideBgrImage(payload: { type: 'image', src: string }) {
    return {
      type: ActionType.CHANGE_SLIDE_BACKROUND_IMAGE,
      payload,
    };
  }
  const moveSlide = (editor: EditorType, slideId: string, targetSlideId: string) => ({
    type: ActionType.MOVE_SLIDE,
    payload: {
      editor, 
      slideId,
      targetSlideId,
    },
  });

  const moveElementOnSlide = (slideId: string, elementId: string, newX: number, newY: number) => ({
    type: ActionType.MOVE_ELEMENT,
    payload: {
      slideId,
      elementId,
      x: newX, 
      y: newY, 
    },
  });

  const resizeElementOnSlide = (
    slideId: string,
    elementId: string,
    newWidth: number,
    newHeight: number,
    newX: number,
    newY: number,
  ) => ({
    type: ActionType.RESIZE_ELEMENT,
    payload: {
      slideId,
      elementId,
      width: newWidth, // Исправлено: используем newWidth и newHeight
      height: newHeight, // Исправлено: используем newWidth и newHeight
      x: newX,
      y: newY,
    },
  });

  function savePresentation(editor: EditorType) {
    return {
        type: ActionType.SAVE_PRESENTATION,
        payload: editor
    }
  }

  function loadPresentation(editor: EditorType) {
    return {
        type: ActionType.LOAD_PRESENTATION,
        payload: editor
    }
  }

export {
    addSlide,
    removeSlide,
    setText,
    setImage,
    deleteObject, 
    changeSlideBackgroud,
    changeSlideBgrImage,
    moveSlide,
    moveElementOnSlide,
    resizeElementOnSlide,
    savePresentation,
    loadPresentation
}