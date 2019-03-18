import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class SendQuery extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={{ pathname: "/getquery", search: "?name=zhy" }}>
                        发送参数
                    </Link>
                </div>
            </Router>
        );
    }
}
