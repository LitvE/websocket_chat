import ACTION_TYPES from "./actionTypes";

export const getMessageAction = () => ({
    type: ACTION_TYPES.GET_MESSAGE_ACTION,
});

export const getMessageRequest = () => ({
    type: ACTION_TYPES.GET_MESSAGE_REQUEST,
});

export const getMessageSuccess = (data) => ({
    type: ACTION_TYPES.GET_MESSAGE_SUCCESS,
    data: {data},
});

export const getMessageError = (error) => ({
    type: ACTION_TYPES.GET_MESSAGE_ERROR,
    error: {error},
});


export const newMessageAction = () => ({
    type: ACTION_TYPES.NEW_MESSAGE_ACTION,
});

export const newMessageRequest = () => ({
    type: ACTION_TYPES.NEW_MESSAGE_REQUEST,
});

export const newMessageSuccess = (data) => ({
    type: ACTION_TYPES.NEW_MESSAGE_SUCCESS,
    data: {data},
});

export const newMessageError = (error) => ({
    type: ACTION_TYPES.NEW_MESSAGE_ERROR,
    error: {error},
});