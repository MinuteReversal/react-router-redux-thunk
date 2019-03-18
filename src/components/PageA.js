import React, { Component } from "react";
import { connect } from "react-redux";

export class PageA extends Component {
    render() {
        let { count, add, remove } = this.props;
        return (
            <div>
                <div>PageA</div>
                <div>{count}</div>
                <button onClick={() => add()}>add</button>
                <button onClick={() => remove()}>remove</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    add() {
        dispatch({ type: "increment" });
    },
    remove() {
        dispatch({ type: "decrement" });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageA);
