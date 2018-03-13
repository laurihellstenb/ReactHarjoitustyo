import React from 'react';
import Tuote from  './Tuote';

function Tuotelista (props) {
    let tuotteet = props.tuotteet.map(function(tuote, index) {
        return (<Tuote tuote={tuote} key={index} />)
    });
    return (<div>{tuotteet}</div>);
}

export default Tuotelista;
