import React, {Component} from "react";
import App from "app";

export default class Layout extends App {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title"><img src="/img/logo-californiainn.png" alt="California Inn" title="California Inn" /></h1>
                        <h2 className="subtitle"><a href="https://www.facebook.com/californiabuzios" target="_blank"><span className="icon"><i className="fa fa-facebook"></i></span> @CaliforniaBuzios</a></h2>
                    </div>
                </div>
            </section>
        );
    }
}