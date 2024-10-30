import { Slide } from "../store/TypesPresentation";
import { SlideO } from "./slide/Slide";
import styles from './WorkSpace.module.css'

type WorkspaceProps = {
    slide: Slide,
}

function Workspace({slide}: WorkspaceProps)
{
    return (
        <div className={styles.workspace}>
            <SlideO slide={slide} isSelected={false} className={styles.workspace}></SlideO>
        </div>
    )
}

export {
    Workspace,
}