const initState = {
    information: {
        priority: 'high',
        deadline: 'Chicken, chicken',
        status: 'done',
        description: 'Chicken chicken',
    },
}

const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/information-change':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default TodoReducer;