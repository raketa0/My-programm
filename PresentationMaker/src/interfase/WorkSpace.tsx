
import { Slide } from "../store/TypesPresentation";
import { SlideO } from "./slide/Slide";
import styles from './WorkSpace.module.css'

type WorkspaceProps = {
    slide: Slide | null,
    selectedObjectId: string | null
}
function Workspace({slide, selectedObjectId}: WorkspaceProps)
{
    return (
        <div className={styles.workspace}>
            <SlideO slide={slide} isSelected={false} className={styles.workspace} selectedObjectId={selectedObjectId}></SlideO>
        </div>
    )
}

export {
    Workspace,
}