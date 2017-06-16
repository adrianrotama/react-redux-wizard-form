import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import Dialog from "material-ui/Dialog"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"
import { browserHistory as history } from "react-router"

import { updateForm, fetchResponse } from "../../action/FormAction"

class FormDocumentation extends Component {
    constructor() {
        super()
        this.state = {
            openDialog: false
        }
    }

    handleFileUpload = (stateType, e) => {
        e.preventDefault()
        let fileName = e.target.files[0].name
        this.props.updateForm(stateType, fileName)
    }

    handleSubmit = () => {
        this.props.fetchResponse().then(()=>{
            history.push("accepted")
        })     
    }

    render() {
        return (
            <div className="form-page">
                <div className="form-title">Documentation</div>
                <div className="form-subtitle">Upload your copy of utility bill and social security number</div>
                <div className="margin-top-24">
                    <div>Copy of Utility Bill</div>
                    <div className="form-upload-container">
                        <RaisedButton
                            containerElement='label'
                            label='Choose File'>
                            <input type="file" style={{display: 'none'}} onChange={this.handleFileUpload.bind(this, "documentationUtilityBill")}/>
                        </RaisedButton>
                        <div className="file-name">{this.props.documentationUtilityBill}</div>
                    </div>
                </div>
                <div className="margin-top-24 margin-bottom-48">
                    <div>Copy of Social Security Number</div>
                    <div className="form-upload-container">
                        <RaisedButton
                            containerElement='label'
                            label='Choose File'>
                            <input type="file" style={{display: 'none'}} onChange={this.handleFileUpload.bind(this, "documentationSocialSecurityNumber")}/>
                        </RaisedButton>
                        <div className="file-name">{this.props.documentationSocialSecurityNumber}</div>
                    </div>
                </div>
                <PrevNextPageButton prev={4} submit={()=>this.setState({openDialog: true})}/>
                <Dialog
                    open={this.state.openDialog}
                    onRequestClose={()=>this.setState({openDialog:false})}
                >
                    <div>
                        <div className="form-title">Choose Response</div>
                        <div className="dialog-action-container">
                            <RaisedButton secondary={true} label="Example Rejected" onClick={()=>history.push("rejected")} className="dialog-action"/>
                            <RaisedButton primary={true} label="Example Accepted" onClick={()=>this.handleSubmit()} className="dialog-action"/>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    documentationUtilityBill: state.FormReducer.documentationUtilityBill,
    documentationSocialSecurityNumber: state.FormReducer.documentationSocialSecurityNumber,
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
    fetchResponse: () => dispatch(fetchResponse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormDocumentation)