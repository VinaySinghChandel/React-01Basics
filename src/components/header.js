import React from 'react';
//import ReactDOM from 'react-dom';

//function
// const Header = () => {
//     return(
//         <div>
//             Hello Header
//         </div>
//     )
// }

const Header = (props) => {
    return(
        <div className="main">
            <p className="header">Filter World</p>
            <table>
                <colgroup>
                    <col width="50%"/>
                    <col width="50%"/>
                </colgroup>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <input type="text" placeholder="Type to search" onChange={props.keywords}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Header;