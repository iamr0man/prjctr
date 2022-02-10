import React from 'react';
import './index.scss'
import CHeader from "../Common/CHeader";
import CreateNoteForm from "./CreateNoteForm";

function CreateNote(props) {
    return (
        <div className="create-note">
            <CHeader text={'Create New Note'} level={2} />
            <CreateNoteForm />
        </div>
    );
}

export default CreateNote;