import React, {useEffect, useRef} from 'react';
import './index.scss'
import NoteDisplayingView from "./NoteDisplayingView";
import { decodeHtml } from "../../helpers";
import {useFormState} from "../../store/modules/FormState";

function NoteDisplaying () {
    const [formState] = useFormState()

    return (
        <NoteDisplayingView
            selectedNote={formState.note}
            decodeHtml={decodeHtml}
        />
    );
}

export default NoteDisplaying;