import React, { Component } from 'react';
import SurveyForm from './surveyForm';
import SurveyReview from './surveyFormReview'

class SurveyNew extends Component{
    state = {showFormReview: false};

    renderContent(){
        if (this.state.showFormReview) {
            return <surveyFormReview />
        } 

        return <surveyForm 
        onSurveySumbmit={() => this.setState({ showFormReview: true})} />
    }

    render(){
        return (
            <div>
                {this.renderContent};
            </div>
        );
    }
}

export default SurveyNew;