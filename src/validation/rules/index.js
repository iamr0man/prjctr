import {IS_NOT_EMPTY, LENGTH_SMALLER_THAN} from "../../constants";

export const isNotEmptyRule = (value) => value && value.length
export const isLengthGreaterRule = (value, length) => value && value.length <= length

export const isTitleValid = (errors) => errors.title.length === 0
export const isContentValid = (errors) => errors.content.length === 0

export const isFormValid = (state, errors) => {
    return state.form.touched.title && state.form.touched.content && isTitleValid(errors) && isContentValid(errors)
}

export const validate = ({ prop, value, rules }) => {
    let errors = []
    rules.forEach(rule => {
        let ruleName = rule
        let ruleValue;

        if (typeof rule === 'object') {
            const ruleArray = Object.entries(rule)[0]
            ruleName = ruleArray[0]
            ruleValue = ruleArray[1]
        }
        switch (ruleName) {
            case IS_NOT_EMPTY:
                const required = isNotEmptyRule(value)
                if (!required) errors.push(`${prop} is required`)
                return
            case LENGTH_SMALLER_THAN:
                const isLengthValid = isLengthGreaterRule(value, ruleValue)
                if (!isLengthValid) errors.push(`${prop} must be max ${ruleValue} characters.`)
                return
            default:
                return
        }
    })
    return errors
}

