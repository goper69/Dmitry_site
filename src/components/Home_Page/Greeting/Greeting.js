import React from 'react';
import './Greeting.css';
import video2 from './video_background/ГОТОВИЙ.mp4';
import Arrow_Down from '../../Arrow_Down/Arrow_Down';
import { Component } from 'react';

export default class  Greeting extends Component
{
    render ()
    {
        let offset = window.innerHeight;
        return(
        <div className = "greeting_block" >
            <video src = {video2} autoPlay muted loop></video>

            <div className = "greeting_inner_wrapper">

                <div className = "greeting_text">
                    <h2>dmytro yatsyna</h2>
                    <h3>fashion influencer</h3>
                </div>
                <Arrow_Down slider_scroll = {this.props.slider_scroll} y = {offset}/>
            </div>

        </div>

        );

    };
};
 