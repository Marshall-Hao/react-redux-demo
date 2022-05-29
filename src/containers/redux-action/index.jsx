import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxActionDemo extends Component {
    render() { 
        const {actionName} = this.props
        return (
            <div>
                {actionName}
            </div>
        );
    }
}
 
export default connect((state)=>state.reduxActionReducer)(ReduxActionDemo);