/* eslint-disable */
import { editors } from "./data.ts"
import { saveToLocalStorage } from "../lockalStorage/localStorageUtils.ts"
import { loadFromLocalStorage } from "../lockalStorage/localStorageUtils.ts"

let _editor =  editors || loadFromLocalStorage() 
let _handler: Function | null = null//(() => void) | null

function getEditor() 
{
    loadFromLocalStorage;
    return _editor
}

function setEditor(newEditor: any) 
{
    _editor = newEditor
    saveToLocalStorage(_editor);
}

function dispatch(modifyFn: Function, payload?: Object): void 
{
    const newEditor = modifyFn(_editor, payload)
    setEditor(newEditor)
    if (_handler) {
        _handler()
    }
}

function addEditorChangeHandler(handler: Function): void
{
    _handler = handler
}

export {
    getEditor,
    dispatch,
    addEditorChangeHandler,
}