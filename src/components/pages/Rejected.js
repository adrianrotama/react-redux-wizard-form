import React, { Component } from "react"
import { browserHistory as history } from "react-router"

export default class Accepted extends Component {

    render() {
        return (
            <div className="main-page">
                <div className="form-title">
                    Sorry something when wrong
                </div>
                <div className="margin-top-12 margin-bottom-48" style={{textAlign:"center"}}>
                    For further information please contact local branch at (021)-12345678, your application number is 12311
                </div>
                <div className="link" onClick={()=>history.push("/")}>back to main page</div>
                <div className="margin-top-6 link" onClick={()=>history.push("form")}>Continue your application</div>
            </div>
        )
    }
}