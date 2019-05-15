import socket from "../socket";
import store from '../store';
import {addMessage} from "../message/apiMessage";

socket.on('message_posted', message => {
    store.dispatch(addMessage(message));
});

