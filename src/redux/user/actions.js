export const actionTypes = {
    CHANGE_NAME: "CHANGE_NAME"
};

export const changeName = (newName) => {
    return {
        type: actionTypes.CHANGE_NAME,
        payload: newName
    }
};