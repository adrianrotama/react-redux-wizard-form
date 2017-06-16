import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import { browserHistory as history } from "react-router"
import { connect } from "react-redux"

import { resetForm } from "../../action/FormAction"

class MainPage extends Component {

    handleNewApplication = () => {
        this.props.resetForm()
        history.push("form")
    }

    handleContinue = () => {
        history.push("form")
    }

    render() {
        return (
            <div className="main-page">
                <div className="title">
                    React Redux Wizard Form
                </div>
                <div className="btn-wrapper">
                    <RaisedButton primary={true} label="New Application" className="btn" style={{marginRight:24}} onTouchTap={this.handleNewApplication}/>
                    <RaisedButton primary={true} label="Continue Your Application" className="btn right" disabled={!this.props.agree} onTouchTap={this.handleContinue}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    agree: state.FormReducer.agree
})

const mapDispatchToProps = (dispatch) => ({
    resetForm: () => dispatch(resetForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)