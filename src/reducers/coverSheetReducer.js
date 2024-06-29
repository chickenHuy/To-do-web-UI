const initState = {
    information: {
        showCoverSheet: false,
        opacity: 'bg-opacity-70',
        backgroundColor: 'bg-slate-700',
    },
}

const CoverSheetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'home/home-cover-sheet-change':
            return {
                ...state,
                information: action.payload,
            }

        default:
            return state;
    }
}

export default CoverSheetReducer;