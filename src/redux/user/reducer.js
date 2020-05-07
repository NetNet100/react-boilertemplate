import {actionTypes} from "./actions";

const userModal = {
    uid: 534324,
    name: 'Neta',
    age: 22
};

export const userReducer = (state = userModal, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_NAME :
            return {...state, ...state.user, name: action.payload };

        default:
            return state
    }
};
