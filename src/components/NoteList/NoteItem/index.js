import React, {useMemo} from 'react';
import './index.scss'
import {Button, Typography} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { selectNote, toggleCreateForm, editNote, deleteNote } from "../../../store/actions";

const { Title, Text } = Typography;

function NoteItem ({ item }) {
    const selectedNote = useSelector(state => state.selectedNote)
    const dispatch = useDispatch()

    const shortText = useMemo(() => {
        if (item.content.length > 50) {
            return item.content.slice(0, 50) + '...'
        }
        return item.content
    }, [item])

    function stripHtml(html) {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    const openNoteDetails = () => {
        dispatch(toggleCreateForm(false))
        dispatch(selectNote(item))
    }

    const editNoteDetails = (e) => {
        e.stopPropagation()

        dispatch(editNote(item))
        dispatch(toggleCreateForm(true))
    }

    const deleteNoteFromList = (e) => {
        e.stopPropagation()

        dispatch(deleteNote(item.id))

        if (selectedNote && selectedNote.id === item.id) {
            dispatch(toggleCreateForm(true))
            dispatch(selectNote({ title: '', content: '' }))
        }
    }

    return (
        <div
            className="note-item"
            onClick={() => openNoteDetails()}
        >
            <Title
                level={3}
                className="note-item__title"
            >
                {item.title}
            </Title>
            <Text
                className="note-item__text"
            >
                <div dangerouslySetInnerHTML={{ __html: stripHtml(shortText) }} />
            </Text>
            <div className="note-item__row">
                <Button
                    type="primary"
                    onClick={(e) => editNoteDetails(e)}
                >
                    Edit Note
                </Button>
                <Button
                    type="danger"
                    onClick={(e) => deleteNoteFromList(e)}
                >
                    Delete Note
                </Button>
            </div>
        </div>
    );
}

export default NoteItem;