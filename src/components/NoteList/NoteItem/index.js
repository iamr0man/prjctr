import React, {useMemo} from 'react';
import './index.scss'
import {Button, Typography} from 'antd';
import {useNoteState} from "../../../store/modules/NoteState";
import {useFormState} from "../../../store/modules/FormState";
import {useNavigationState} from "../../../store/modules/NavigationState";
import { stripHtml } from "../../../helpers";
import AppService from "../../../services/app";

const { Title, Text } = Typography;

function NoteItem ({ item }) {
    const [, actions] = useNoteState()
    const [formState, formActions] = useFormState()
    const [, navigationActions] = useNavigationState()
    const appService = AppService(actions, formActions, navigationActions)

    const { note } = formState

    const shortText = useMemo(() => {
        if (item.content.length > 50) {
            return stripHtml(item.content.slice(0, 50)) + '...'
        }
        return item.content
    }, [item])

    const openNoteDetails = () => {
        appService.openNote(item)
    }

    const editNoteDetails = (e) => {
        e.stopPropagation()
        appService.editNote(item)
    }

    const deleteNoteFromList = (e) => {
        e.stopPropagation()
        appService.deleteNote(item, note)
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