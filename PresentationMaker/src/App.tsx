import styles from './App.module.css'
import {   SlideList } from './interfase/slide'
import { TopPanel } from './interfase/top-panel'
import { Workspace } from './interfase/WorkSpace'
import { EditorType } from './store/editorType'

type AppProps = {
    editor: EditorType,
}

function App({editor}: AppProps)
{
    return (
        <>
            <TopPanel title={editor.presentation.title}></TopPanel>
            <div className={styles.container}>
                <  SlideList slides={editor.presentation.slides} selection={editor.selection}></  SlideList>
                <Workspace slide={editor.presentation.slides[0]}></Workspace>
            </div>
        </>
    )
}

export default App