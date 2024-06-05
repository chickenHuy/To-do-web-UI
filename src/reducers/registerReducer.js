const initState = {
    information: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        emailError: true,
    },
}

const RegisterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'register/information-change':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default RegisterReducer;