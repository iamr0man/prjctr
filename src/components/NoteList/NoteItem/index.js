import React, {useMemo} from 'react';
import './index.scss'
import {Button, Typography} from 'antd';
import {useNoteState} from "../../../store/modules/NoteState";
import {useFormState} from "../../../store/modules/FormState";
import { stripHtml } from "../../../helpers";
import { CREATE_FORM_MODE, VIEW_FORM_MODE } from "../../../constants";

const { Title, Text } = Typography;

function NoteItem ({ item }) {
    const [, actions] = useNoteState()
    const [formState, formActions] = useFormState()

    const { note } = formState

    const shortText = useMemo(() => {
        if (item.content.length > 50) {
            return stripHtml(item.content.slice(0, 50)) + '...'
        }
        return item.content
    }, [item])

    const openNoteDetails = () => {
        formActions.changeNote(item)
        formActions.toggleCreateForm(VIEW_FORM_MODE)
    }

    const editNoteDetails = (e) => {
        e.stopPropagation()

        formActions.changeNote(item)

        formActions.setTouchedFlag({ title: true })
        formActions.setTouchedFlag({ content: true })

        formActions.toggleCreateForm(CREATE_FORM_MODE)
    }

    const deleteNoteFromList = (e) => {
        e.stopPropagation()

        actions.deleteNote(item.id)

        if (note && note.id === item.id) {
            formActions.resetNote()
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