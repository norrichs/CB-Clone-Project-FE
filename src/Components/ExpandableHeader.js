import React from 'react';

const ExpandableHeader = ({show}) => {
    return show 
        ? (<h1>this is the ExpandableHeader</h1>)
        : null
}

export default ExpandableHeader; 