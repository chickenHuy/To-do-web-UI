const initState = {
    information: {
        showOverview: false,
    },
}

const OverviewReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/show-overview':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default OverviewReducer;