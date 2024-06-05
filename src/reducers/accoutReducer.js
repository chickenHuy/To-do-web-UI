const initState = {
    information: {
        firstName: '',
        lastName: '',
        email: '',
        avatarUrl: '',
    },
}

const AccoutReducer = (state = initState, action) => {
    switch (action.type) {
        case 'home/accout-information':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default AccoutReducer;