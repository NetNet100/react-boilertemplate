export const actionTypes = {
    CHANGE_NAME: "CHANGE_NAME"
};

export const CHANGE_NAME = (newName) => {
    return {
        type: actionTypes.CHANGE_NAME,
        payload: newName
    }
};