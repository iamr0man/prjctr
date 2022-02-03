import React, {useMemo} from 'react';
import './index.scss'
import {Button, Typography} from 'antd';
import {useNoteState} from "../../../store/modules/NoteState";
import {useFormState} from "../../../store/modules/FormState";

const { Title, Text } = Typography;

function NoteItem ({ item }) {
    const [state, action] = useNoteState()
    const [_, formAction] = useFormState()

    const { selectedNote } = state

    const shortText = useMemo(() => {
        if (item.content.length > 50) {
            return item.content.slice(0, 50) + '...'
        }
        return item.content
    }, [item])

    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    const getHandledText = () => stripHtml(shortText)

    const openNoteDetails = () => {
        formAction.toggleCreateForm(false)
        action.selectNote(item)
    }

    const editNoteDetails = (e) => {
        e.stopPropagation()

        action.editNote(item)
        formAction.toggleCreateForm(true)
    }

    const deleteNoteFromList = (e) => {
        e.stopPropagation()

        action.deleteNote(item.id)

        if (selectedNote && selectedNote.id === item.id) {
            formAction.toggleCreateForm(true)
            action.selectNote({ title: '', content: '' })
        }
    }

    return (
        <NoteItemView
            title={item.title}
            getHandledText={getHandledText}
            openNoteDetails={openNoteDetails}
            editNoteDetails={editNoteDetails}
            deleteNoteFromList={deleteNoteFromList}
        />
    );
}

function NoteItemView ({ title, openNoteDetails, editNoteDetails, deleteNoteFromList, getHandledText }) {

    return (
        <div
            className="note-item"
            onClick={() => openNoteDetails()}
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
                <div dangerouslySetInnerHTML={{ __html: getHandledText() }} />
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
    )
}

export default NoteItem;