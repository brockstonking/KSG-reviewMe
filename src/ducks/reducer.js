let initialState = {
    businessName: ''
}

const SET_BUSINESS_NAME = 'SET_BUSINESS_NAME';


export const businessInfo = (businessName) => {
    return {
        type: 'SET_BUSINESS_NAME',
        payload: {
            businessName: businessName
        }
    }

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_BUSINESS_NAME:
            return {
                ...state,
                businessName: payload.businessName
            }
        default:
            return state
    }

}

export default reducer;