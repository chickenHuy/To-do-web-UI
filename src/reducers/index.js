import AccoutReducer from "./accoutReducer";
import LoginReducer from "./loginReducer";
import RegisterReducer from "./registerReducer";

const rootReducer = (state = {}, action) => {
    return {
        loginReducer: LoginReducer(state.loginReducer, action),
        registerReducer: RegisterReducer(state.registerReducer, action),
        accoutReducer: AccoutReducer(state.accoutReducer, action),
    }
}

export default rootReducer;
