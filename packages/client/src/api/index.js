import axios from 'axios';
import {io} from 'socket.io-client';
import {newMessageSuccess, newMessageError} from './../actions/actionCreator';
import store from ('../store');

const baseurl = "ws://127.0.0.1:3000";

const socket = io(baseurl);

const CHAT_EVENTS = {
    NEW_MESSAGE: "NEW_MESSAGE",
    ERROR_NEW_MESSAGE: "ERROR_NEW_MESSAGE",
};

socket.on(CHAT_EVENTS.NEW_MESSAGE, msg => {
    const data = JSON.parse(msg);
    store.dispatch(newMessageSuccess(data))
})

socket.on(CHAT_EVENTS.ERROR_NEW_MESSAGE, err => {
    const error = JSON.parse(err);
    store.dispatch(newMessageError(error));
})

export const sendMessage = data => {
    socket.emit(CHAT_EVENTS.NEW_MESSAGE, JSON.stringify(data));
};

const baseAPI = axios.create({baseURL: 'http://127.0.0.1:3000/api'});

export const getMessages = () => baseAPI.get('/messages');