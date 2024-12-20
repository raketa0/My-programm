
import { Slide } from "../store/TypesPresentation";
import { SlideO } from "./slide/Slide";
import styles from './WorkSpace.module.css'
import { useAppSelector } from "./Hooks/useAppSelector";

type WorkspaceProps = {
    slide: Slide | null,
     selectedObjectId: string | null
}
function Workspace()
{

    const editor = useAppSelector((editor=> editor))
    const slides = editor.presentation.slides
    const selection = editor.selection
    const selectedSlide: Slide = slides.find(slide => slide.id === selection?.selectedSlideId) || slides[0]
    const selectedObj: string = editor.selection?.selectedObjectId

    return (
        <div className={styles.workspace}>
            <SlideO slide={selectedSlide}  className={styles.workspace} selectedObjectId={selectedObj}></SlideO>
        </div>
    )
}

export {
    Workspace,
}