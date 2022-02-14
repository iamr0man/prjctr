import {MAX_TITLE_LENGTH, MAX_CONTENT_LENGTH} from "../constants";

export const getTitleErrors = (title) => {
    const errors = []
    if (!title) errors.push('Title is required')
    if (title.length > MAX_TITLE_LENGTH) errors.push(`Title must be max ${MAX_TITLE_LENGTH} characters.`)
    return errors
}
export const getContentErrors = (content) => {
    const errors = []
    if (!content) errors.push('Content is required')
    if (content.length > MAX_CONTENT_LENGTH) errors.push(`Content must be max ${MAX_CONTENT_LENGTH} characters.`)
    return errors
}

export const isFormValid = (state, currentErrors) => {
    return state.form.touched.title &&
        state.form.touched.content &&
        currentErrors.title.length === 0 &&
        currentErrors.content.length === 0
}

