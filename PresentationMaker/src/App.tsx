import styles from './App.module.css'
import { SlideList } from './interfase/slideList'
import { TopPanel } from './interfase/top-panel'
import { Workspace } from './interfase/WorkSpace'
import { EditorType } from './store/editorType'
import { OperatPanel } from './interfase/OperationPanel/OperationPanel'
type AppProps = {
    editor: EditorType,
}

function App({editor}: AppProps)
{
    return (
        <>
            <TopPanel title={editor.presentation.title}></TopPanel>
            <OperatPanel></OperatPanel>
            <div className={styles.container}>
                <SlideList slides={editor.presentation.slides} selection={editor.selection}></  SlideList>
                <Workspace slide={editor.presentation.slides.find(SlideO => SlideO.id == editor.selection?.selectedSlideId) || null} 
                selectedObjectId={editor.selection?.selectedObjectId}>
                </Workspace>
            </div>
        </>
    )
}

export default App