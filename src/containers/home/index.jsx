import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateName, queryAsyncName,updateAsyncName } from "../../actions/home";



class Home extends Component {
    updateName = () => {
        const {updateName, queryAsyncName ,updateAsyncName} = this.props

        updateName('what the fuck')
        queryAsyncName('async holy fuck')
        updateAsyncName('async fuck u')
    }


    render() { 
        console.log(this.props)
        return (
            <div>
               {this.props.homeName}
               <button type="button" onClick={this.updateName}>
                    change
               </button>
            </div>
        );
    }
}


export default connect((state) => {
    return state.homeReducer
}, (dispatch) => ({
    updateName: (params) =>  dispatch(updateName(params)),
    queryAsyncName: (params) => dispatch(queryAsyncName(params)),
    updateAsyncName: (params) => dispatch(updateAsyncName(params))
}))(Home);