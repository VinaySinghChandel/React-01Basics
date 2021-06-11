import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';

import './styles/style.css';
import db from './db.json';

class App extends Component{

    state = {
        news    :   db,
        footerText  :   'Hello New World'
    }

    render() {
        //console.log(db);
        const {news, footerText} = this.state;
         return(
            <>
                <Header/>
                <NewsList
                    news = {news}
                >
                    <h1>Hello I am children</h1>
                </NewsList>
                <Footer footerText={footerText}/>
            </>
        )
    };
}

ReactDOM.render(<App/>, document.getElementById('root'));