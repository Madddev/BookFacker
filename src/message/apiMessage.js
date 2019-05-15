
import {CHAT_CLOSED, CHAT_MESSAGE_POSTED, CHAT_MESSAGES_FETCHED, CHAT_OPENED,HTTP_ERROR } from '../actionsChat/index';

export const open = dispatch => user => {
    dispatch({
        type: CHAT_OPENED,
        payload: user
    });
};

export const close = dispatch => user => {
    dispatch({
        type: CHAT_CLOSED,
        payload: user
    });
};

export const addMessage = dispatch => message =>{
    dispatch({
        type: CHAT_MESSAGE_POSTED,
        payload: message
    })
};
export const postMessage = (recipient, content, dispatch) => {
    return fetch(`${process.env.REACT_APP_API_URL}/messages/${recipient._id},, ${content}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body:content
    })
        .then(response => {
            dispatch({
                type: CHAT_MESSAGE_POSTED,
                payload: response.data
            })        })
        .catch(err => console.log(err));
};

export const getMessageById = (friend, dispatch) => {
    return fetch(`${process.env.REACT_APP_API_URL}/messages/${friend._id}`, {
        method: "GET",
    })
        .then(response => {
            dispatch({
                type: CHAT_MESSAGES_FETCHED,
                payload: response.data
            });
        })
        .catch(e => {
            dispatch({
                type: HTTP_ERROR,
                payload: e
            });
        });
};