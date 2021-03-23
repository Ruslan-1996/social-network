import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={`${s.formControl} ${hasError && s.errorInput}`}>
            <textarea {...input} {...props}/>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;
    return (
        <div className={`${s.formControl} ${hasError && s.errorInput}`}>
            <input {...input} {...props}/>
        </div>
    )
}