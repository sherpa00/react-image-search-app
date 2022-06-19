const imageReducer = (state = null, action) => {
    switch (action.type) {
        case "ADDIMG":
            return action.payload.img;
        default:
            return state;
    }
}

export default imageReducer;