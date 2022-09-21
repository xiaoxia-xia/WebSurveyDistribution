import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';

const FIELDS = [
    {label: "Survey Title", name: "title"},
    {label: "Subject Line", name: "subject"},
    {label: "Email Body", name: "body"},
    {label: "Recipient List", name: "emails"}
];


class SurveyForm extends Component{
    renderFields(){
        return _.map(FIELDS, ({label, name}) => {
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
                <form onSubmit={this.props.handleSubmit(value => console.log(value))}>
                    {this.renderFields()}
                    <button type="submit"></button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);