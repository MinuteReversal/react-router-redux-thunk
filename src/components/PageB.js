import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class PageB extends Component {
    static propTypes = {
        count: PropTypes.number
    };
    render() {
        let { count, dispatch } = this.props;
        return (
            <div>
                <div>PageB</div>
                <div>{count}</div>
                <button onClick={() => dispatch({ type: "increment" })}>
                    add
                </button>
                <button onClick={() => dispatch({ type: "decrement" })}>
                    remove
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(
    mapStateToProps,
    null
)(PageB);
