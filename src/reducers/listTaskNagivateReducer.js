const initState = {
    information: {
        navigate: 'my-day',
        id: '',
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