import React from 'react';
import {Typography} from "antd";
const { Title } = Typography;

function NoteDisplayingView ({ selectedNote, decodeHtml }) {
    return (
        <>
            {
                (selectedNote)
                    ? (
                        <div>
                            <Title level={1}>
                                {selectedNote.title}
                            </Title>
                            <div className="note-displaying" dangerouslySetInnerHTML={{ __html: decodeHtml(selectedNote.content) }} />
                        </div>)
                    : (
                        <div>
                            <div className="note-displaying">No Content</div>
                        </div>
                    )
            }
        </>
    )
}

export default NoteDisplayingView;