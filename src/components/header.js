import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

//function
// const Header = () => {
//     return(
//         <div>
//             Hello Header
//         </div>
//     )
// }

class Header extends Component {
    render() {
        return(
            <div className="main">
                <p className="header">Hello Header</p>
                <table>
                    <colgroup>
                        <col width="50"/>
                        <col width="50"/>
                    </colgroup>
                    <tr>
                        <td><b>Name</b></td>
                        <td><input type="text"/></td>
                    </tr>
                </table>
            </div>
        )
    }
}

// let styles = {
//     header : {
//         background : '#00fa9a',
//         fontFamily : 'Roboto',
//         textAlign : 'center'
//     }
//}

export default Header;