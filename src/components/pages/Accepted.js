import React, { Component } from "react"
import { browserHistory as history } from "react-router"
import { connect } from "react-redux"

class Accepted extends Component {

    componentWillMount(){
        !this.props.accountNumber && history.push("/")
    }

    render() {
        return (
            <div className="main-page">
                <div className="form-title">
                    Congratulation your application has been accepted!
                </div>
                <div className="margin-top-12 margin-bottom-48" style={{textAlign:"center"}}>
                    {`your account number is #${this.props.accountNumber}`}
                </div>
                <div className="link" onClick={()=>history.push("/")}>back to main page</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    accountNumber: state.FormReducer.response.id
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Accepted)