import React, {useEffect} from 'react'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from "./MenuBar";
import './index.scss'

const ContentInput = ({ content, noteToEdit, setContent }) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: ``,
        onBlur ({ editor, event }) {
            setContent(editor.getHTML())
        },
    })

    useEffect(() => {
        if (!editor) return;
        editor.commands.setContent(content)
    }, [content])

    useEffect(() => {
        if (!editor) return;
        if (noteToEdit) {
            editor.commands.setContent(noteToEdit.content)
            return
        }
        editor.commands.setContent('')
    }, [noteToEdit])

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default ContentInput