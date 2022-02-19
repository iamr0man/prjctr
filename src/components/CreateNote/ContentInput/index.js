import React, {useEffect} from 'react'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from "./MenuBar";
import './index.scss'

const ContentInput = ({ content, onInputFocus, onChangeNoteContent }) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: ``,
        onFocus ({ editor, event }) {
            onInputFocus({ content: true })
        },
        onUpdate ({ editor}) {
            const existText = editor.getText()
            if (!existText){
                onChangeNoteContent('')
                return
            }
            onChangeNoteContent(editor.getHTML())
        }
    })

    useEffect(() => {
        if (!editor) return;
        editor.commands.setContent(content)
    }, [editor, content])

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default ContentInput