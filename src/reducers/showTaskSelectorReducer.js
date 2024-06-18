const initState = {
    information: {
        priority: 'hidden',
        status: 'hidden',
        deadline: 'hidden',
    },
}

const ShowTaskSelectorReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/show-task-selector-change':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default ShowTaskSelectorReducer;