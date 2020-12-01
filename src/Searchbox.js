import React from 'react';

const Searchbox = ({
    searchfield,
    searchChange
}) => {
    return ( < div className = '' >
        <
        input type = 'search'
        placeholder = 'Search Friends'
        className = 'bg-light-blue'
        onChange = { searchChange }
        / > < /
        div >
    );
}


export default Searchbox;