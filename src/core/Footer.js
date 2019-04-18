import React from "react";
import Posts from "../post/Posts";
import './footer.css';


const Footer = () => (
    <div id="live-chat">

        <header className="clearfix">

            <a href="#" className="chat-close">x</a>

            <h4>John Doe</h4>

            <span className="chat-message-counter">3</span>

        </header>

        <div className="chat">

            <div className="chat-history">

                {/*<div className="chat-message clearfix">

                    <img src="http://lorempixum.com/32/32/people" alt="" width="32" height="32"/>

                    <div className="chat-message-content clearfix">

                        <span className="chat-time">13:35</span>

                        <h5>John Doe</h5>
                        <p>dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
*/}

            </div>

            <p className="chat-feedback">Your partner is typing…</p>

            <form action="#" method="post">

                <fieldset>

                    <input type="text" placeholder="Type your message…" autoFocus/>
                    <input type="hidden"/>

                </fieldset>

            </form>

        </div>
    </div>
)   ;

export default Footer;
