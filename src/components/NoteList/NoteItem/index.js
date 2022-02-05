import React, {useMemo} from 'react';
import './index.scss'
import {Button, Typography} from 'antd';
import {useNoteState} from "../../../store/modules/NoteState";
import {useFormState} from "../../../store/modules/FormState";
import { stripHtml } from "../../../helpers";
import { CREATE, VIEW } from "../../../constants";

const { Title, Text } = Typography;

function NoteItem ({ item }) {
    const [, actions] = useNoteState()
    const [formState, formAction] = useFormState()

    const { selectedNote } = formState

    const shortText = useMemo(() => {
        if (item.content.length > 50) {
            return stripHtml(item.content.slice(0, 50)) + '...'
        }
        return item.content
    }, [item])

    const openNoteDetails = () => {
        formAction.toggleCreateForm(VIEW)
        formAction.selectNote(item)
    }

    const editNoteDetails = (e) => {
        e.stopPropagation()

        actions.editNote(item)
        formAction.toggleCreateForm(CREATE)
    }

    const deleteNoteFromList = (e) => {
        e.stopPropagation()

        actions.deleteNote(item.id)

        if (selectedNote && selectedNote.id === item.id) {
            formAction.toggleCreateForm(CREATE)
            formAction.selectNote({ title: '', content: '' })
        }
    }

    return (
        <NoteItemView
            title={item.title}
            content={shortText}
            onClickNote={openNoteDetails}
            onEditNote={editNoteDetails}
            onDeleteNote={deleteNoteFromList}
        />
    );
}

function NoteItemView ({ title, content, onClickNote, onEditNote, onDeleteNote }) {

    return (
        <div
            className="note-item"
            onClick={() => onClickNote()}
        >
            <Title
                level={3}
                className="note-item__title"
            >
                {title}
            </Title>
            <Text
                className="note-item__text"
            >
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Text>
            <div className="note-item__row">
                <Button
                    type="primary"
                    onClick={(e) => onEditNote(e)}
                >
                    Edit Note
                </Button>
                <Button
                    type="danger"
                    onClick={(e) => onDeleteNote(e)}
                >
                    Delete Note
                </Button>
            </div>
        </div>
    )
}

export default NoteItem;