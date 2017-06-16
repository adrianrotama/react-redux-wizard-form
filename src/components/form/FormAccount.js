import React, { Component } from "react"
import TextField from "material-ui/TextField"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

const textFieldStyle = {width:"100%"}

class FormAccount extends Component {

    changeTextField = (stateType, event, newValue) => {
        this.props.updateForm(stateType, newValue)
    }

    render() {
        return(
            <div className="form-page">
                <div className="form-title">Account Information</div>
                <div className="form-subtitle">Please insert your account information to the form below.</div>
                <div>
                    <SelectField
                        floatingLabelText="Account Type"
                        value={this.props.accountType}
                        onChange={this.changeTextField.bind(this, "accountType")}
                    >
                        <MenuItem value={0} primaryText="Savings" />
                        <MenuItem value={1} primaryText="Deposit" />
                    </SelectField>
                </div>
                <div>
                    <TextField
                        floatingLabelText="Purpose of Bank Account"
                        onChange={this.changeTextField.bind(this, "accountPurpose")}
                        multiLine={true}
                        rows={1}
                        rowsMax={5}
                        value={this.props.accountPurpose}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="Where will the money come from?"
                        onChange={this.changeTextField.bind(this, "accountWhere")}
                        value={this.props.accountWhere}
                        style={textFieldStyle}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="How did you hear about us?"
                        onChange={this.changeTextField.bind(this, "accountHow")}
                        value={this.props.accountHow}
                        style={textFieldStyle}
                    />
                </div>
                <PrevNextPageButton prev={3} next={5}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    accountType: state.FormReducer.accountType,
    accountPurpose: state.FormReducer.accountPurpose,
    accountWhere: state.FormReducer.accountWhere,
    accountHow: state.FormReducer.accountHow,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormAccount)