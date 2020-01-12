import { combineReducers } from 'redux'
import { CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM } from './actions'

const initialState = {
    form: { // 今回はControlledとして扱う
        name: '',
        age: ''
    },
    characters: { // isFetching === trueのときにLoading...という風に出したい。アプリが現状把握するために必要
        isFetching: false,
        characterArray: []
    }
}

const formReducer = (state = initialState.form, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name
            }
        case CHANGE_AGE:
            return {
                ...state,
                age: action.age
            }
        case INITIALIZE_FORM:
            return initialState.form
        default:
            return state
    }
}