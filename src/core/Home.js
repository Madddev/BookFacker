import React from "react";
import Posts from "../post/Posts";

const Home = () => (
    <div>
        <div className="jumbotron">
            <p className="lead">Welcome to React Frontend</p>
        </div>
        <div className="container">
            <Posts />
        </div>
    </div>
);

export default Home;
