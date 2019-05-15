import React, { Component } from "react";
import { list } from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";
import PopupMessage from "../message/modalMessage";
import {open, close} from '../message/apiMessage';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {connect} from "react-redux";

import { Link } from "react-router-dom";


const cardStyle = {
    margin: 'auto',
    padding : '10px'
};
class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }
    toggleChat = friend => {
        if (this.props.isOpen) {
            this.props.close();
        } else {
            this.props.open(friend);
        }
    };
    componentDidMount() {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ users: data });
            }
        });
    }

    renderUsers = users => {
        return(
            <div className="row">
                {users.map((user, i) => (

                    <div className="card col-md-3" key={i} style={cardStyle}>
                        <img
                            style={{ height: "200px", width: "auto" }}
                            className="img-thumbnail"
                            src={`${process.env.REACT_APP_API_URL}/user/photo/${
                                user._id
                                }`}
                            onError={i => (i.target.src = `${DefaultProfile}`)}
                            alt={user.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.email}</p>
                            <Link
                                to={`/user/${user._id}`}
                                className="btn btn-raised btn-dark btn-sm"
                            >
                                View Profile
                            </Link>
                            {"  "}<FontAwesomeIcon icon="comment-dots" className={"clickable"} onClick={() => this.toggleChat(user)}/>
                            {/*<PopupMessage friend={user} isOpen={this.props.isOpen} />*/}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    render() {

        const { users } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Users</h2>
                {this.renderUsers(users)}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isOpen: state.chat.isOpen,
    friend: state.chat.friend
});

export default connect(
    mapStateToProps,
    { open, close}
)(Users);