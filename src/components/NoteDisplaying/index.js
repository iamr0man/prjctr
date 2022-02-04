import React, {useEffect} from 'react';
import './index.scss'
import NoteDisplayingView from "./NoteDisplayingView";
import {useNoteState} from "../../store/modules/NoteState";
import { decodeHtml } from "../../helpers";

function NoteDisplaying (props) {
    const [state, actions] = useNoteState()

    useEffect(() => {
        const noteDisplaying = document.getElementsByClassName('note-displaying')

        iterateTroughNoteAndAddEventToLink(noteDisplaying[0])
    }, [state.selectedNote])

    const confirmTransition = (e) => {
        e.preventDefault()

        if (window.confirm('Are you sure leave out site?')) {
            window.open(e.target.href, '_blank')
        }
    }

    const iterateTroughNoteAndAddEventToLink = (node) => {
        if (node.tagName === 'A') {
            node.addEventListener('click', confirmTransition)
        }
        if (node.children && node.children.length) {
            [...node.children].forEach(v => iterateTroughNoteAndAddEventToLink(v))
        }
    }

    return (
        <NoteDisplayingView
            selectedNote={state.selectedNote}
            decodeHtml={decodeHtml}
        />
    );
}

export default NoteDisplaying;