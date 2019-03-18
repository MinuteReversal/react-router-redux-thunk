import React, { Component } from "react";

import { connect } from "react-redux";
import { AsyncAction } from "../redux/actions";

export class AsyncDataRedux extends Component {
    render() {
        return (
            <div>
                <div>AsyncDataRedux</div>
                <div>{this.props.count}</div>
                <button onClick={() => this.props.add()}>add</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    add() {
        dispatch(AsyncAction());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AsyncDataRedux);
