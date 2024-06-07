import AccoutReducer from "./accoutReducer";
import FilterReducer from "./filterReducer";
import LoginReducer from "./loginReducer";
import RegisterReducer from "./registerReducer";
import TodoReducer from "./todoReducer";

const rootReducer = (state = {}, action) => {
    return {
        loginReducer: LoginReducer(state.loginReducer, action),
        registerReducer: RegisterReducer(state.registerReducer, action),
        accoutReducer: AccoutReducer(state.accoutReducer, action),
        todoReducer: TodoReducer(state.todoReducer, action),
        filterReducer: FilterReducer(state.filterReducer, action),
    }
}

export default rootReducer;
