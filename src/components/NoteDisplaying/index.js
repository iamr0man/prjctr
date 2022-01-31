import React, {useEffect} from 'react';
import './index.scss'
import {useSelector} from "react-redux";
import {Typography} from 'antd';
const { Title } = Typography;


function NoteDisplaying (props) {

    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const selectedNote = useSelector(state => state.selectedNote)

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

    useEffect(() => {
        const noteDisplaying = document.getElementsByClassName('note-displaying')

        iterateTroughNoteAndAddEventToLink(noteDisplaying[0])
    }, [selectedNote])

    return (
        <>
            {
                (selectedNote && selectedNote.content)
                    ? (
                    <div>
                        <Title level={1}>
                            {selectedNote.title}
                        </Title>
                        <div className="note-displaying" dangerouslySetInnerHTML={{ __html: decodeHtml(selectedNote.content) }} />
                    </div>)
                    : (
                    <div>
                        <Title level={1}>
                            {selectedNote.title}
                        </Title>
                        <div className="note-displaying">No Content</div>
                    </div>
                )
            }
        </>
    );
}

export default NoteDisplaying;