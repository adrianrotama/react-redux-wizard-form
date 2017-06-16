import React, { Component } from "react"
import { connect } from "react-redux"
import RaisedButton from "material-ui/RaisedButton"

import { setStep } from '../action/FormAction'

class PrevNextPageButton extends Component {

    render() {
        return (
            <div className="space-between margin-top-24">
                <div>
                    {!!this.props.prev && <RaisedButton label="Prev" onClick={()=>this.props.setStep(this.props.prev)}/>}
                </div>
                <div>
                    {!!this.props.next && <RaisedButton disabled={this.props.disableNext} primary={true} label="Next" onClick={()=> !this.props.disableNext ? this.props.setStep(this.props.next) : ()=>{}}/>}
                </div>
                {!!this.props.submit &&
                    <div>
                        <RaisedButton primary={true} label="Submit" onClick={()=> this.props.submit()}/>
                    </div>
                }
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    setStep: (step) => dispatch(setStep(step)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PrevNextPageButton)

