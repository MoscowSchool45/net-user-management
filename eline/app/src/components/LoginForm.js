import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik'
import {connect} from 'react-redux';

import { promiseListener } from '../store';
import { API_LOGIN, API_LOGIN_FAILED, API_LOGIN_SUCCESS } from "../eline/ApiActions";



export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.onSubmitGeneratedAsync.unsubscribe()
    }

    componentDidMount() {
        this.onSubmitGeneratedAsync = promiseListener.createAsyncFunction({
            'start': API_LOGIN,
            'resolve': API_LOGIN_SUCCESS,
            'reject': API_LOGIN_FAILED,
            'setPayload': (action, payload) => ({...action, ...payload}),
            'getPayload': (action) => {},
        });
    }

    onSubmit = (values, actions) => {
        this.onSubmitGeneratedAsync.asyncFunction(values).then(
            resolvePayload => {
                // Safe to do nothing, the component will now unmount
                //actions.setSubmitting(false);
                //actions.setFieldValue('password', '')
            },
            rejectPayload => {
                actions.setSubmitting(false);
                actions.setFieldValue('password', '')
                actions.setFieldError('username', 'Login failed');
            }
        )
    };

    render() {
        return <Formik onSubmit={this.onSubmit}
                       initialValues={{username: '', password: ''}}
                       render={({errors, touched, isSubmitting}) => (
                           <Form>
                               <div className="row" style={{textAlign: 'right'}}>
                                   <label className="col-xs-4" htmlFor="username">Username</label>
                                   <Field className="col-xs-8" type="text" name="username"/>
                                   {errors.username && touched.username && <div>{errors.username}</div>}
                               </div><div className="row" style={{textAlign: 'right'}}>
                                   <label className="col-xs-4" htmlFor="password">Password</label>
                                   <Field className="col-xs-8" type="password" name="password"/>
                                   {errors.password && touched.password && <div>{errors.password}</div>}
                               </div><div className="row" style={{textAlign: 'center'}}>
                                   <button type="submit" disabled={isSubmitting}>
                                       Login
                                   </button>
                               </div>
                           </Form>
                       )}
        />
    }
}
