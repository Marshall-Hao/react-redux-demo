import React, { Component } from 'react';
import CustomContext from './button-context';
import Newbutton from './consumer';

class NewContext extends Component {
    constructor(props) {
        super(props)
        this.state = {
           color : '#fff000',
           text: 'fuck'
        }
    }
    render() { 
        const {color, text} = this.state
        return (
            <CustomContext.Provider value={[color,text]}>
                <Newbutton>
                    New Context Api
                </Newbutton>
            </CustomContext.Provider>
        );
    }
}
 
export default NewContext;