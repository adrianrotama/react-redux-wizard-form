import axios from 'axios'

export const SET_STEP = 'SET_STEP'
export const UPDATE_FORM = 'UPDATE_FORM'

export const FETCH_RESPONSE_SUCCESS = 'FETCH_RESPONSE_SUCCESS'
export const FETCH_RESPONSE_FAILED = 'FETCH_RESPONSE_FAILED'

export const RESET_FORM = 'RESET_FORM'
export const RESET_FORM_RESPONSE = 'RESET_FORM_RESPONSE'

export const setStep = (step) => {
    return {
        type: SET_STEP,
        payload: step
    }
}

export const updateForm = (stateType, value) => {
    return {
        type: UPDATE_FORM,
        payload: {
            stateType,
            value
        }
    }
}

export const fetchResponseSuccess = (data) => {
    return {
        type: FETCH_RESPONSE_SUCCESS,
        payload: data
    }   
}

export const fetchResponseFailed = () => {
    return {
        type: FETCH_RESPONSE_FAILED
    }   
}

export const resetForm = () => {
    return {
        type: RESET_FORM
    }
}

const resetFormResponse = () => {
    return {
        type: RESET_FORM_RESPONSE
    }
}

export const fetchResponse = () => {
	return (dispatch, getState) => new Promise((resolve,reject) => {
        dispatch(resetFormResponse())
		axios.get(`https://fiveloop.snco.co/api/success.json`)
		.then((response) => {
			dispatch(fetchResponseSuccess(response.data))
            resolve()
		})
		.catch((error) => {
            dispatch(fetchResponseFailed())
			reject()
        })
	})
}