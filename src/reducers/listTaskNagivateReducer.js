const initState = {
    information: {
        navigate: 'todo',
    },
}

const ListTaskNavigateReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/list-task-navigate-change':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default ListTaskNavigateReducer;