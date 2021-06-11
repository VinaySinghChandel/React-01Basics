import React from 'react';

import NewListItems from './news_list_items';
const NewsList = (props) => {

    const news = props.news.map((item)=>(
                    <NewListItems news_list={item} key={item.id}/>
                ));
    
    return (
        <>
            {news}
            {props.children}
        </>
    );
}

export default NewsList;