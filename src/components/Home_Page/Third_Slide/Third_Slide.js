import React from 'react';
import './Third_Slide.css';

const Third_Slide = ({slider_scroll}) =>
{
    const lang_label =
    {
        ua : {contact : "контакти",},
        ru : {contact : "контакты",},
        en : {contact : "contacts"}
    }
    return(
        <div className = "third_slide_block">

            <div className = "third_slide_inner_wrapper">
                <div className = {"third_slide_btn " + window.localStorage.language}>
                    <button>{lang_label[window.localStorage.language].contact}</button>
                </div>
            </div>

        </div>
    );
};
 
export default Third_Slide;