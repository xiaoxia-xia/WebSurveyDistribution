import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../util/validateEmail'
import formFields from './formFields'


class SurveyForm extends Component{
    renderFields(){
        return _.map(formFields, ({label, name}) => {
            return (
                <Field 
                    key={name} 
                    component={SurveyField} 
                    type="text"
                    label={label} 
                    name={name}
                />
            );
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}>
                    {this.renderFields()}
                    <button type="submit"></button>
                    <Link to="/surveys" className='red btn-flat white-text'>
                        Cancel
                    </Link>

                    <button type='submit' className='teal btn-flat right white-text'>
                    submit
                        <i className='material-icons right'>done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors ={};
    
    errors.emails = validateEmails(values.emails || '');
    _.each(formFields, ({name})=> {
        if(!values[name]){
            errors[name] = 'You must provide the value'
        }
    });

    return errors;
}




export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false 
})(SurveyForm);