import { Button } from "../components/button/button"
import './top-panel.modules.css'
import { dispatch } from '../store/editor'
import { removeSlide } from '../store/removeSlide.ts';
import { changeTitle } from "../store/changeTitle.ts";
import * as React from "react";
type TopPanelProps = {
    title: string,
}

function TopPanel({title}: TopPanelProps)
{
    function onAddSlide()
    {

    }
    
    function onRemoveSlide()
    {
        dispatch(removeSlide)
    }

    const onTitleChange: React.ChangeEventHandler = (event) => {
        dispatch(changeTitle, (event.target as HTMLInputElement).value)
    }
    return (
        <div className= "topPanel">
            <input className="title" type="text" defaultValue={title} onChange={onTitleChange}/>
            <div>
                <Button className="button" text={'Добавить слайд'} onClick={onAddSlide}></Button>
                <Button className="button" text={'Удалить слайд'} onClick={onRemoveSlide}></Button>
            </div>
        </div>
    )
}

export {
    TopPanel
}