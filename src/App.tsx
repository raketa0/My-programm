import styles from './App.module.css'
import { SlideList } from './interfase/slideList'
import { TopPanel } from './interfase/top-panel'
import { Workspace } from './interfase/WorkSpace'
import { OperatPanel } from './interfase/OperationPanel/OperationPanel'
import { HistoryType } from './utils/history'
import { HistoryContext } from './interfase/Hooks/historyContenx'

type AppProps = {
    history: HistoryType,
}

function App({history}: AppProps)
{
    return (
        <HistoryContext.Provider value={history}>
            <TopPanel></TopPanel>
            <OperatPanel></OperatPanel>
            <div className={styles.container}>
            <SlideList></SlideList>
            <Workspace></Workspace>
            </div>
        </HistoryContext.Provider>
    )
}

export default App