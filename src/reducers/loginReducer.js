const initState = {
    information: {
        email: '',
        password: '',
        emailError: true,
    },
}

const LoginReducer = (state = initState, action) => {
    switch (action.type) {
        case 'login/information-change':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default LoginReducer;