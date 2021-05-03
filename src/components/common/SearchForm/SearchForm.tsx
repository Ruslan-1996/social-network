import React from 'react';
import {Field, Form, Formik} from "formik";
import {required} from "../../../utils/Validators/validator";

type PropsType = {
    onFilterChanged: (term: string) => void
}

let SearchForm: React.FC<PropsType> = React.memo((props) => {

    const onSubmit = (value: {term: string}, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
        props.onFilterChanged(value.term)
    }

    return (
        <div>
            <Formik
                initialValues={{ term: '' }}
                validate={values => {}}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" placeholder={'Search'} validate={required}/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default SearchForm;