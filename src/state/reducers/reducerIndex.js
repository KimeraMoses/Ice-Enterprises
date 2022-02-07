import {combineReducers} from "redux"
import testRedux from "./testRedux"

const reducers = combineReducers({
    test : testRedux
})


export default reducers