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
    state = {
        active  :   false,
        keyword :   ''
    }
   inputChangeHandler = (event) => {
        const value = event.target.value === '' ? false : true;

        this.setState({
            active  : value,
            keyword :   event.target.value
        });
   }
    // onClickDisplay = (event) => {
    //     //console.log('I was changed');
    //     this.setState((state, props) => ({
    //         count   :   state.count + 1
    //     })
    //         // count   :   this.state.count + 1
    //     );
    // }

    // onChangeName = (event) => {
    //     this.setState({
    //         name    :   event.target.value
    //     });
    // }

    // onChangeEmail = (event) => {
    //     this.setState({
    //         email    :   event.target.value
    //     });
    // }
    render() {
       //console.log(this.state);
        return(
            <div className="main">
                <p className="header" style={{background:`${this.state.active ? 'green' : 'red'}`}}>Hello Header</p>
                <table>
                    <colgroup>
                        <col width="50%"/>
                        <col width="50%"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <input type="text" placeholder="Type to search" onChange={this.inputChangeHandler}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Header;