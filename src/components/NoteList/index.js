import React, {useEffect, useState} from 'react';
import NoteItem from "./NoteItem";
import CHeader from "../Common/CHeader";
import './index.scss'
import { Button, Input } from 'antd';
import {useNoteState} from "../../store/modules/NoteState";
import {useFormState} from "../../store/modules/FormState";
const { Search } = Input;

function NoteList () {
    const [state, action] = useNoteState()
    const [_, formAction] = useFormState()

    const openCreateNoteForm = () => {
        action.editNote(null)
        formAction.toggleCreateForm(true)
    }

    const filterValue = (item, searchedValue) => item.title.includes(searchedValue) || item.content.includes(searchedValue)

    return <NoteListView
        noteList={state.notes}
        openCreateNoteForm={openCreateNoteForm}
        filterValue={filterValue}
    />
}

function NoteListView ({ noteList, openCreateNoteForm, filterValue }) {
    const [searchedValue, setSearchedValue] = useState('')

    return (
        <div className="note-list">
            <CHeader text="Note List">
                <Button
                    type="primary"
                    onClick={() => openCreateNoteForm()}
                >
                    Create Note
                </Button>
            </CHeader>
            <Search placeholder="input search text" onSearch={(value) => setSearchedValue(value)} enterButton />
            <div className="note-list">
                {
                    noteList.map(item => {
                        if (filterValue(item, searchedValue)) {
                            return <NoteItem item={item} key={item.id} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default NoteList;