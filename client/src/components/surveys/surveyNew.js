import React, { Component } from 'react';
import SurveyForm from './surveyForm';
import SurveyFormReview from './surveyFormReview'

class SurveyNew extends Component{
    state = {showFormReview: false};

    renderContent(){
        if (this.state.showFormReview) {
            return (
            <SurveyFormReview
                onCancel={() => this.setState({ showFormReview: false})}
            />
            );
        } 

        return <SurveyForm 
        onSurveySumbmit={() => this.setState({ showFormReview: true})} />
    }

    render(){
        return (
            <div>
                {this.renderContent()};
            </div>
        );
    }
}

export default SurveyNew;