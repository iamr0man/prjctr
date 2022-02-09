import {IS_NOT_EMPTY, LENGTH_GREATER_THAN} from "../../constants";

export const isNotEmptyRule = (value) => value && value.length
export const isLengthGreaterRule = (value, length) => value && value.length <= length

export const isTitleValid = ({ title }) => isNotEmptyRule(title) && !isLengthGreaterRule(title, 15)
export const isContentValid = ({ content }) => isNotEmptyRule(content) && !isLengthGreaterRule(content, 1000)

export const isFormValid = ({ title, content }) => {
    return isTitleValid(title) && isContentValid(content)
}

export const validate = ({ prop, value, rules }) => {
    const errors = []
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
                return !isNotEmptyRule(value) && errors.push(`${prop} is required`)
            case LENGTH_GREATER_THAN:
                return isLengthGreaterRule(value, ruleValue) && errors.push(`${prop} must be max ${ruleValue} characters.`)
            default:
                return
        }
    })
    return errors
}

