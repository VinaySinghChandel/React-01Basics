import React from 'react';

const NewsItems = ({news_list}) => {
    return (
        <>
            <div className="news_items">
                <h3 className="new_list_header">{news_list.title}</h3>
                <p>{news_list.feed}</p>
            </div>
        </>
    )
}

export default NewsItems;
