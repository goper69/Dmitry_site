import React from 'react';
import Arrow_Down from '../../Arrow_Down/Arrow_Down';
import './Second_Slide.css';

const Second_Slide = ({slider_scroll}) =>
{
    const lang_label =
    {
        ua : {portfolio : "портфоліо", view : "переглянути"},
        ru : {portfolio : "портфолио", view : "посмотреть"},
        en : {portfolio : "portfolio", view : "view"}
    }

    let offset = window.innerHeight*2;
    let language = window.localStorage.language;
    let langLab = lang_label[language];
    return(
        <div className = "second_slide_block">

            <div className = "second_slide_inner_wrapper">

                <div className = {"second_slide_text " + language}  >
                    <h2>{langLab.portfolio}</h2>
                </div>
                <button className = {"second_slide_btn " + language}><span>{langLab.view}</span></button>
                <Arrow_Down slider_scroll = {slider_scroll} y = {offset}/>
            </div>

        </div>
    );
};
 
export default Second_Slide;