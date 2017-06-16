import React, { Component } from "react"
import Checkbox from "material-ui/Checkbox"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"

import { updateForm } from "../../action/FormAction"

class FormTnc extends Component {

    handleOnCheck = (event, isInputChecked) => {
        this.props.updateForm("agree", isInputChecked)
    }

    render() {
        return (
            <div className="term-page">
                <div className="form-title">Terms and Condition</div>
                <div className="margin-top-24">The content of the pages of this website is for your general information and use only. It is subject to change without notice</div>
                <div>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties</div>
                <div>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</div>
                <div>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</div>
                <div>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</div>
                <div>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</div>
                <Checkbox
                    label="I have read this Agreement and agree to the terms and condition"
                    checked={this.props.agree}
                    onCheck={this.handleOnCheck}
                />
                <PrevNextPageButton next={2} disableNext={!this.props.agree}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    agree: state.FormReducer.agree
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormTnc)
