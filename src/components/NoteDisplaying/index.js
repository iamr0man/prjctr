import React, {useEffect, useRef} from 'react';
import './index.scss'
import NoteDisplayingView from "./NoteDisplayingView";
import { decodeHtml } from "../../helpers";
import {useFormState} from "../../store/modules/FormState";

function NoteDisplaying () {
    const [formState] = useFormState()

    const noteDisplayingRef = useRef(null)

    useEffect(() => {
        addEventListenerToLink(noteDisplayingRef.current)
    }, [formState.note])

    const confirmTransition = (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure leave out site?')) {
            window.open(e.target.href, '_blank')
        }
    }

    const addEventListenerToLink = (node) => {
        const HTMLCollectionOfLinks = node.querySelectorAll('a')
        if (HTMLCollectionOfLinks) {
            const linkElements = [...HTMLCollectionOfLinks]
            linkElements.forEach(link => link.addEventListener('click', confirmTransition))
        }
    }

    return (
        <NoteDisplayingView
            noteDisplayingRef={noteDisplayingRef}
            selectedNote={formState.note}
            decodeHtml={decodeHtml}
        />
    );
}

export default NoteDisplaying;