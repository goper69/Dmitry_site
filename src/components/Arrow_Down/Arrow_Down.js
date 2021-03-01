import React from 'react';
import './Arrow_Down.css';

const Arrow_Down = ({slider_scroll , y , reverse , isBlack = ""}) =>
{
    return( <button className = {"arrow_down " + reverse + " " + isBlack} onClick = {() => slider_scroll(y)}><i className = "fa fa-angle-down"></i></button> );
};
 
export default Arrow_Down;