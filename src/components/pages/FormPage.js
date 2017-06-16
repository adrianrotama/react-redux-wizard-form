import React, { Component } from "react"
import { connect } from "react-redux"

import FormTnc from "../form/FormTnc"
import FormPersonalInfo from "../form/FormPersonalInfo"
import FormEmployment from "../form/FormEmployment"
import FormAccount from "../form/FormAccount"
import FormDocumentation from "../form/FormDocumentation"

import Stepper from "../Stepper"
import StepperMobile from "../StepperMobile"

class FormPage extends Component {

    renderForm = (step) => {
        switch(step){
            case 1: return <FormTnc/>
            case 2: return <FormPersonalInfo/>
            case 3: return <FormEmployment/>
            case 4: return <FormAccount/>
            case 5: return <FormDocumentation/>
        }
    }

    render() {
        return (
            <div className="form-page adaptive-content">
                <Stepper step={this.props.step}/>
                <StepperMobile step={this.props.step}/>
                {this.renderForm(this.props.step)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step: state.FormReducer.step
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)