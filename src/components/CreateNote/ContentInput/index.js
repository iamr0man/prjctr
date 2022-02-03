import React, {useEffect} from 'react'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from "./MenuBar";
import './index.scss'

const ContentInput = ({ content, noteToEdit, setPastedFlag, setContent }) => {

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

    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const checkIsHtml = (decodedContent) => {
        const isHTMLRegEx = /<(\S*?)[^>]*>.*?<\/\1>|<.*?\/>/g
        return decodedContent.match(isHTMLRegEx)
    }

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: ``,
        async onUpdate ({ editor }) {
            const html = editor.getHTML()
            const decodedContent = decodeHtml(html)

            if (decodedContent === '') return;
            const copiedContent = await navigator.clipboard.readText()

            if (copiedContent === '') return;
            const isPasted = decodedContent.includes('<p>' + copiedContent + '</p>')

            const isHtml = checkIsHtml(decodedContent)

            if (isPasted && isHtml && isHtml.length) {
                setPastedFlag(true)
            }
        },
        onBlur ({ editor, event }) {
            setContent(editor.getHTML())
        },
    })

    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default ContentInput