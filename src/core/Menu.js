import React from "react";
import { signout, isAuthenticated } from "../auth";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

import {NavLink as Link} from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLogged: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        console.log(isAuthenticated());
        return (
            <div>
                <Navbar color="green" expand="md">
                    <NavbarBrand href="/">BookFacker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} exact to={"/"} activeClassName="active">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} exact to={"/users"} activeClassName="active">
                                    Users
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} exact to={"/post/create"} activeClassName="active">
                                    Create Post
                                </NavLink>
                            </NavItem>
                            {isAuthenticated() && isAuthenticated().user.role === "admin" && (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} exact to={"/admin"} activeClassName="active">
                                            Admin
                                        </NavLink>
                                    </NavItem>
                                </>
                            )}
                            {!isAuthenticated() && (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} exact to={"/signin"} activeClassName="active">
                                            Sign In
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} exact to={"/signup"} activeClassName="active">
                                            Sign Up
                                        </NavLink>
                                    </NavItem>
                                </>
                            )}
                            {isAuthenticated() && (
                                <>
                                    <NavItem>
                                        <NavLink tag={Link} exact to={"/findpeople"} activeClassName="active">
                                            Find People
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} exact to={`/user/${isAuthenticated().user._id}`} activeClassName="active">
                                            {`${isAuthenticated().user.name}'s profile`}
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} exact to={"/signout"}  activeClassName="active">
                                            Sign Out
                                        </NavLink>
                                    </NavItem>
                                </>
                            )}

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Menu;
/*const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#ff9900" };
    else return { color: "#ffffff" };
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/users")}
                    to="/users"
                >
                    Users
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to={`/post/create`}
                    style={isActive(history, `/post/create`)}
                    className="nav-link"
                >
                    Create Post
                </Link>
            </li>

            {!isAuthenticated() && (
                <>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                    </li>
                </>
            )}

            {isAuthenticated() && isAuthenticated().user.role === "admin" && (
                <li className="nav-item">
                    <Link
                        to={`/admin`}
                        style={isActive(history, `/admin`)}
                        className="nav-link"
                    >
                        Admin
                    </Link>
                </li>
            )}

            {isAuthenticated() && (
                <>
                    <li className="nav-item">
                        <Link
                            to={`/findpeople`}
                            style={isActive(history, `/findpeople`)}
                            className="nav-link"
                        >
                            Find People
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to={`/user/${isAuthenticated().user._id}`}
                            style={isActive(
                                history,
                                `/user/${isAuthenticated().user._id}`
                            )}
                            className="nav-link"
                        >
                            {`${isAuthenticated().user.name}'s profile`}
                        </Link>
                    </li>

                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={
                                (isActive(history, "/signup"),
                                { cursor: "pointer", color: "#fff" })
                            }
                            onClick={() => signout(() => history.push("/"))}
                        >
                            Sign Out
                        </span>
                    </li>
                </>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);*/
