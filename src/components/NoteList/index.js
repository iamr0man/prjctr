import React, {useEffect, useState} from 'react';
import NoteItem from "./NoteItem";
import CHeader from "../Common/CHeader";
import './index.scss'
import {useNoteState} from "../../store/modules/NoteState";
import {useFormState} from "../../store/modules/FormState";
import {useNavigationState} from "../../store/modules/NavigationState";
import { Button, Input } from 'antd';
import AppService from "../../services/app";
const { Search } = Input;

function NoteList () {
    const [state, actions] = useNoteState()
    const [, formActions] = useFormState()
    const [, navigationActions] = useNavigationState()
    const appService = new AppService(actions, formActions, navigationActions)

    const [filteredArray, setFilteredArray] = useState([])

    useEffect(() => {
        setFilteredArray(state.notes)
    }, [state])

    const openCreateNoteForm = () => {
        appService.openFormNote()
    }

    const filterCondition = (item, searchedValue) => item.title.includes(searchedValue) || item.content.includes(searchedValue)

    const filterNotes = (searchedValue) => {
        const filteredArray = state.notes.filter(item => filterCondition(item, searchedValue))
        setFilteredArray(filteredArray)
    }

    return <NoteListView
        noteList={filteredArray}
        onCreateNote={openCreateNoteForm}
        onSearchChange={filterNotes}
    />
}

function NoteListView ({ noteList, onCreateNote, onSearchChange }) {
    const [, setSearchedValue] = useState('')

    return (
        <div className="note-list">
            <CHeader text="Note List">
                <Button
                    type="primary"
                    onClick={() => onCreateNote()}
                >
                    Create Note
                </Button>
            </CHeader>
            <Search
                placeholder="input search text"
                onSearch={(value) => {
                    setSearchedValue(value)
                    onSearchChange(value)
                }}
                enterButton
            />
            <div className="note-list">
                {noteList.map((item) => {
                    return <NoteItem item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default NoteList;