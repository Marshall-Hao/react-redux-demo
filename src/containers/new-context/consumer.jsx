import React, { Component,useContext } from 'react';
import CustomContext from './button-context';

// class Newbutton extends Component {
//     static contextType = CustomContext

//     constructor(props) {
//         super(props)
//     }

//     render() { 
//         console.log(this.context)
//         const {children} = this.props 
//         return (
//             <button type="button" style={{color: this.context[0]}}>
//                 {children}
//             </button>
//         );
//     }
// }
 

export default function NewButton(props) {
    const {children} = props
    const context = useContext(CustomContext);

    return (
        <button type="button" style={{color: context[0]}}>
         {children}
        </button>
    )
}
// export default Newbutton;