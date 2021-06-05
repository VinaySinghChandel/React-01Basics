import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import './styles/style.css';

const App = () =>{
    return(
        <>
            <Header/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));