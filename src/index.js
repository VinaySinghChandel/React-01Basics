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
        filtered    :   db,
        footerText  :   'Hello New World'
    }

    getKeyWords = (event) => {
        //console.log(event.target.value);
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({
            filtered
        })
        //console.log(filtered);
    }

    render() {
        //console.log(db);
        const {footerText, filtered} = this.state;
         return(
            <>
                <Header
                    keywords={this.getKeyWords}
                />
                <NewsList
                    news = {filtered}
                >
                    <h1>Hello I am children</h1>
                </NewsList>
                <Footer footerText={footerText}/>
            </>
        )
    };
}

ReactDOM.render(<App/>, document.getElementById('root'));