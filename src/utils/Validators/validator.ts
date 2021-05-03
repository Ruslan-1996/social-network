export type FieldValidatorType = (value: string) => string | undefined

export const required = (value:string) => {
    if (value) {
        return undefined
    }
    return 'Field is required';
}

export const maxLengthCreator = (maxLength:number):FieldValidatorType => value => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined;
}

export const password: FieldValidatorType = value => {
    const beginWithoutDigit = /^\D.*$/
    const withoutSpecialChars = /^[^-() /]*$/
    const containsLetters = /^.*[a-zA-Z]+.*$/

    if(beginWithoutDigit.test(value) && withoutSpecialChars.test(value) &&
        containsLetters.test(value) && value.length >= 8) {
        return undefined
    }
    return 'Error password'
}


