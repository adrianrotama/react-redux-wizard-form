import React, { Component } from "react"
import TextField from "material-ui/TextField"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

const textFieldStyle = {width:"100%"}

class FormPersonalInfo extends Component {

    changeTextField = (stateType, event, newValue) => {
        this.props.updateForm(stateType, newValue)
    }

    render() {
        return (
            <div className="form-page">
                <div className="form-title">Personal Info</div>
                <div className="form-subtitle">Please insert your personal information to the form below.</div>
                <div className="two-col">
                    <div>
                        <TextField
                            floatingLabelText="First Name"
                            onChange={this.changeTextField.bind(this, "firstName")}
                            value={this.props.firstName}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Middle Name"
                            onChange={this.changeTextField.bind(this, "middleName")}
                            value={this.props.middleName}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Last Name"
                            onChange={this.changeTextField.bind(this, "lastName")}
                            value={this.props.lastName}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Home Phone"
                            onChange={this.changeTextField.bind(this, "homePhone")}
                            value={this.props.homePhone}
                            style={textFieldStyle}
                        />
                    </div>
                </div>
                <div className="two-col">
                    <div>
                        <TextField
                            floatingLabelText="Mobile Phone"
                            onChange={this.changeTextField.bind(this, "mobilePhone")}
                            value={this.props.mobilePhone}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Email Address"
                            onChange={this.changeTextField.bind(this, "email")}
                            value={this.props.email}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Mailing Address"
                            onChange={this.changeTextField.bind(this, "mailingAddress")}
                            value={this.props.mailingAddress}
                            style={textFieldStyle}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Social Security Number"
                            onChange={this.changeTextField.bind(this, "socialSecurityNumber")}
                            value={this.props.socialSecurityNumber}
                            style={textFieldStyle}
                        />
                    </div>
                </div>
                <PrevNextPageButton prev={1} next={3}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    firstName: state.FormReducer.firstName,
    middleName: state.FormReducer.middleName,
    lastName: state.FormReducer.lastName,
    homePhone: state.FormReducer.homePhone,
    mobilePhone: state.FormReducer.mobilePhone,
    email: state.FormReducer.email,
    mailingAddress: state.FormReducer.mailingAddress,
    socialSecurityNumber: state.FormReducer.socialSecurityNumber,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPersonalInfo)
