import { Button, Modal } from 'react-bootstrap';
import {connect} from "react-redux";
import React, { Component } from "react";
import MessageForm from "./MessageForm";
import Message from "./Message";
import {getMessageById,close,open} from './apiMessage';
import {onElementHeightChange} from '../helpers/dom';


class PopupMessage extends Component {

    close = () => {
        this.props.close();
    };

    componentWillMount() {
        console.log(this.props);
        this.props.getMessageById(this.props.friend);
    }

    componentDidMount() {
        const modal = document.getElementById('modal-content');
        onElementHeightChange(modal, () => {
            modal.scrollTop = modal.scrollHeight - modal.clientHeight;
        });
    }

    render() {
        return (
            <>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.messages.map(message => (
                            <Message message={message} key={message._id} />
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                         <MessageForm/>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}

const mapStateToProps = state => ({
    isOpen: state.chat.isOpen,
    messages: state.chat.messages,
});

export default connect(mapStateToProps, {close, getMessageById})(PopupMessage);

