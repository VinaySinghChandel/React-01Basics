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
        name    :   'Example',
        email   :   'example@gmail.com',
        count   :   0
    }
   
    onClickDisplay = (event) => {
        //console.log('I was changed');
        this.setState((state, props) => ({
            count   :   state.count + 1
        })
            // count   :   this.state.count + 1
        );
    }

    onChangeName = (event) => {
        this.setState({
            name    :   event.target.value
        });
    }

    onChangeEmail = (event) => {
        this.setState({
            email    :   event.target.value
        });
    }
    render() {
       console.log(this.state);
        return(
            <div className="main">
                <p className="header">Hello Header</p>
                <table>
                    <colgroup>
                        <col width="50%"/>
                        <col width="50%"/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><b>Name</b></td>
                            <td><input type="text" onChange={this.onChangeName}/></td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td><input type="text" onChange={this.onChangeEmail}/></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.onClickDisplay}>ADD</button></td>
                        </tr>
                        <tr>
                            <td className="result">{this.state.count}. </td>
                        </tr>
                        <tr>
                            <td className="result">{this.state.name}</td>
                        </tr>
                        <tr>
                            <td className="result">{this.state.email}</td>
                        </tr>
                    </tbody>
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