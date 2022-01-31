import { useEffect } from "react";
import './App.scss';

import CreateNote from "./components/CreateNote/index";
import NoteList from "./components/NoteList";
import NoteDisplaying from "./components/NoteDisplaying";

import {useDispatch, useSelector} from 'react-redux'
import { initNoteList } from './store/actions/'

function App() {
    const isCreateFormOpen = useSelector(state => state.isCreateFormOpen)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initNoteList())
    }, [dispatch])

    return (
        <div className="app">
            {
                isCreateFormOpen
                    ? <CreateNote />
                    : <NoteDisplaying />
            }
            <NoteList />
        </div>
    );
}

export default App;
