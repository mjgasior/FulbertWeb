import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { textLoaderAction } from '../actions/sampleActions';

class SampleContainer extends Component {
    handleOnClick() {
        this.props.actions("This is the new text after click!!!");
    }

    render() {
        return (
            <p style={{ background: 'lightgray' }} onClick={this.handleOnClick.bind(this)}>
                {this.props.theText}
            </p>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        theText: state.myText
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(textLoaderAction, dispatch)
    };
}
  

const ReduxSampleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SampleContainer);

export default ReduxSampleContainer;
