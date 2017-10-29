import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SamplePropTypes extends Component {
    render() {
        if (this.props.isMainTextVisible) {
            return (<p>Sample text with main text!</p>);   
        } else {
            return (<p>Just sample text!</p>);
        }
    }
}

SamplePropTypes.propTypes = {
    isMainTextVisible: PropTypes.bool.isRequired
};

export default SamplePropTypes;
