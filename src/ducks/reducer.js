let initialState = {
    business: ''
}



export const businessInfo = (username, profilePicture) => {
    return {
        type: 'DEFINE_USER',
        payload: {
            username: username,
            profilePicture: profilePicture
        }
    }

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state
    }

}

export default reducer;