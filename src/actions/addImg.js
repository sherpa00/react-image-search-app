const addImg = (img) => {
    return {
        type: "ADDIMG",
        payload: {
            img: img
        }
    }
}

export default addImg;