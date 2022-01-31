import React, {useEffect, useState} from 'react';
import NoteItem from "./NoteItem";
import CHeader from "../Common/CHeader";
import './index.scss'
import { Button, Input } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { editNote, toggleCreateForm } from '../../store/actions/index'
const { Search } = Input;

function NoteList (props) {
    const [searchedValue, setSearchedValue] = useState('')

    let noteList = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const openCreateNoteForm = () => {
        dispatch(editNote(null))
        dispatch(toggleCreateForm(true))
    }

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
                    noteList.map(v => {
                        if (v.title.includes(searchedValue) || v.content.includes(searchedValue)) {
                            return <NoteItem item={v} key={v.id} />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default NoteList;