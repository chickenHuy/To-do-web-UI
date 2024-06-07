const initState = {
    information: {
        priority: 'hidden',
        status: 'hidden',
        deadline: 'hidden',
    },
}

const ShowFilterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/show-filter':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default ShowFilterReducer;