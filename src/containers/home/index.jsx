import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateName } from "../../actions/home";



class Home extends Component {
    updateName = () => {
        const {updateName} = this.props

        updateName('what the fuck')
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
    updateName: (params) =>  dispatch(updateName(params))
}))(Home);