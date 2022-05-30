import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CustomeButton from './button';

class Home extends Component {
    static childContextTypes = {
        color: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
            color: '#00fff0'
        }
    }

    getChildContext() {
        const {color} = this.state
        return {
            color
        }
    }

    render() { 
        return (
            <div>
                <CustomeButton>
                    Context example
                </CustomeButton>
           
            </div>
        );
    }
}
 
export default Home;