import './top-panel.modules.css'
import { dispatch } from '../store/editor'
import { changeTitle } from "../store/changeTitle.ts";
import * as React from "react";
type TopPanelProps = {
    title: string,
}
function TopPanel({title}: TopPanelProps){
    const onTitleChange: React.ChangeEventHandler = (event) => {
        dispatch(changeTitle, (event.target as HTMLInputElement).value)
    }
    return (
        <div className= "topPanel">
           
            <input className={"title"} type="text" defaultValue={title} onChange={onTitleChange}/>
        </div>
    )
}

export {
    TopPanel
}