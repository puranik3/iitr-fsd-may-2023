import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";

const TodoComponent = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [ id, setId ] = useState( params.id ); // "101" -> 101
    
    const [ description, setDescription ] = useState( '' );
    const [ targetDate, setTargetDate ] = useState( () => moment(new Date()).format("YYYY-MM-DD") );

    useEffect(
        () => {
            if (id === "-1") {
                return;
            }

            let username = AuthenticationService.getLoggedInUserName();

            TodoDataService.retrieveTodo(username, id).then((response) => {
                setDescription( response.data.description );
                setTargetDate(moment(response.data.targetDate).format( "YYYY-MM-DD" ));
            });
        },
        []
    );

    const validate = (values) => {
        let errors = {};

        if (!values.description) {
            errors.description = "Enter a Description";
        } else if (values.description.length < 5) {
            errors.description = "Enter atleast 5 Characters in Description";
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid Target Date";
        }

        return errors;
    }

    const onSubmit = (values) => {
        let username = AuthenticationService.getLoggedInUserName();

        let todo = {
            id: id,
            description: values.description,
            targetDate: values.targetDate,
        };

        if (id === "-1") {
            TodoDataService.createTodo(username, todo).then(() =>
                navigate("/todos")
            );
        } else {
            TodoDataService.updateTodo(username, id, todo).then(() =>
                navigate("/todos")
            );
        }
    }

    return (
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                    initialValues={{ description, targetDate }}
                    onSubmit={onSubmit}
                    validateOnChange={true}
                    validateOnBlur={true}
                    validate={validate}
                    enableReinitialize={true}
                >
                    {() => (
                        <Form noValidate>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="description"
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field
                                    className="form-control"
                                    type="date"
                                    name="targetDate"
                                />
                            </fieldset>
                            <button
                                className="btn btn-success"
                                type="submit"
                            >
                                Save
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default TodoComponent;
