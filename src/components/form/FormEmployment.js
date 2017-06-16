import React, { Component } from "react"
import TextField from "material-ui/TextField"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

const textFieldStyle = {width:"100%"}

class FormEmployment extends Component {

    changeTextField = (stateType, event, newValue) => {
        this.props.updateForm(stateType, newValue)
    }

    render() {
        return (
            <div className="form-page">
                <div className="form-title">Employement Information</div>
                <div className="form-subtitle">Please insert your employement information to the form below.</div>
                <div>
                    <TextField
                        floatingLabelText="Employer Name"
                        onChange={this.changeTextField.bind(this, "employerName")}
                        value={this.props.employerName}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Employer Address"
                        onChange={this.changeTextField.bind(this, "employerAddress")}
                        multiLine={true}
                        rows={2}
                        rowsMax={5}
                        value={this.props.employerAddress}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Work Phone"
                        onChange={this.changeTextField.bind(this, "workPhone")}
                        value={this.props.workPhone}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Job Position"
                        onChange={this.changeTextField.bind(this, "jobPosition")}
                        value={this.props.jobPosition}
                        style={textFieldStyle}
                    />
                </div>
                <PrevNextPageButton prev={2} next={4}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employerName: state.FormReducer.employerName,
    employerAddress: state.FormReducer.employerAddress,
    workPhone: state.FormReducer.workPhone,
    jobPosition: state.FormReducer.jobPosition,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormEmployment)