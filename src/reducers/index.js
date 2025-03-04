import AccoutReducer from "./accoutReducer";
import CoverSheetReducer from "./coverSheetReducer";
import FilterReducer from "./filterReducer";
import ListTaskNavigateReducer from "./listTaskNagivateReducer";
import LoginReducer from "./loginReducer";
import OverviewReducer from "./overviewReduver";
import RegisterReducer from "./registerReducer";
import ShowFilterReducer from "./showFilterReducer";
import ShowTaskSelectorReducer from "./showTaskSelectorReducer";
import TodoReducer from "./todoReducer";

const rootReducer = (state = {}, action) => {
    return {
        loginReducer: LoginReducer(state.loginReducer, action),
        registerReducer: RegisterReducer(state.registerReducer, action),
        accoutReducer: AccoutReducer(state.accoutReducer, action),
        todoReducer: TodoReducer(state.todoReducer, action),
        filterReducer: FilterReducer(state.filterReducer, action),
        showFilterReducer: ShowFilterReducer(state.showFilterReducer, action),
        listTaskNavigateReducer: ListTaskNavigateReducer(state.listTaskNavigateReducer, action),
        overviewReducer: OverviewReducer(state.overviewReducer, action),
        showTaskSelectorReducer: ShowTaskSelectorReducer(state.showTaskSelectorReducer, action),
        coverSheetReducer: CoverSheetReducer(state.coverSheetReducer, action),
    }
}

export default rootReducer;
