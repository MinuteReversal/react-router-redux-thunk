import React, { Component } from "react";

export default class GetQuery extends Component {
    render() {
        let name = this.props.location.search;
        return <div>{name}</div>;
    }
}
