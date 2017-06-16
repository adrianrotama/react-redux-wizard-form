import React, { Component } from "react"

const stepTitle = ["Terms", "Personal Info", "Employment Info", "Account Info", "Documentation"]

export default class StepperMobile extends Component {
    render() {
        return (
            <div className="stepper-mobile-container">
                <div>
                    {stepTitle[this.props.step-1]}
                </div>
                <div className="subtitle">
                    Step <b>{this.props.step}</b> of 5
                </div>
                <progress value={this.props.step} max={5}/>
            </div>
        )
    }
}