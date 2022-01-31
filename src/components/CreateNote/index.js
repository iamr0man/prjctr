import React from 'react';
import './index.scss'
import CHeader from "../Common/CHeader";
import Index from "./CreateNoteForm";

function CreateNote(props) {
    return (
        <div className="create-note">
            <CHeader text={'Create New Note'} level={2} />
            <Index />
        </div>
    );
}

export default CreateNote;