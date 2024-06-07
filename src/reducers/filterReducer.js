const initState = {
    information: {
        priority: 'All',
        status: 'All',
        deadline: 'All',
    },
}

const FilterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/filter-change':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default FilterReducer;