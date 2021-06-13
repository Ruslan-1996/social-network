import React from 'react';
import {Field, Form, Formik} from "formik";
import {required} from "../../../utils/Validators/validator";
import s from './SearchForm.module.css'
import {useSelector} from "react-redux";
import {getFilterUsers} from "../../../redux/usersSelectors";

type PropsType = {
    onFilterChanged: (term: string) => void
}

let SearchForm: React.FC<PropsType> = React.memo((props) => {

    const onSubmit = (value: { term: string }, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.onFilterChanged(value.term)
    }

    const filter = useSelector(getFilterUsers)

    return (
        <div>
            <Formik
                initialValues={{term: filter}}
                validate={values => {
                }}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term" placeholder={'Search'} validate={required} className={s.input}/>
                        <button type="submit" disabled={isSubmitting} className={s.button}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default SearchForm;