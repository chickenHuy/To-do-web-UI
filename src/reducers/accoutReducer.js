const initState = {
    information: {
        email: '',
        firstName: '',
        lastName: '',
        avatarUrl: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
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