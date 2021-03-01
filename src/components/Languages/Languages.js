import React, {useState} from 'react';
import './Languages.css';

const Languages = ({onNavClick, color , fixed}) =>
{
    const changeFirst = (lang) =>
    {
        if(lang === "ua") return "ru";
        else return "ua"
    }
    const changeSecond = (lang) =>
    {
        if(lang === "ru") return "en";
        else return "en"
    }

    let language = window.localStorage.language;

    let [activeClass , isActive] = useState("");
    let [firstLabel , isFirst] = useState(changeFirst(language));
    let [secondLabel , isSecond] = useState(changeSecond(language));

    const onActive = () =>
    {
        if(activeClass === "active") isActive(activeClass = "");
        else isActive(activeClass = "active");
    }

    const changeLabel = (lang) =>
    {
        if(lang === "ua")
        {
            isFirst(firstLabel = "ru");
            isSecond(secondLabel = "en")
        }
        else if(lang === "ru")
        {
            isFirst(firstLabel = "ua");
            isSecond(secondLabel = "en")
        }
        else if(lang === "en")
        {
            isFirst(firstLabel = "ua");
            isSecond(secondLabel = "ru")
        }
    }
    const pickLang = (lang) =>
    {
        window.localStorage.language = lang;
        isActive(activeClass = "")
        changeLabel(lang);
        onNavClick(lang);
    }
    
    return(
        <nav className = {"languages_nav " + color + " " + fixed} >
            <button id = "mainBtn" className = {activeClass} onClick = {()=> onActive()}>{language}</button>
            <div className= {"hidden_buttons " + activeClass}>
                <button onClick = {()=> pickLang(firstLabel)}>{firstLabel}</button>
                <button onClick = {()=> pickLang(secondLabel)}>{secondLabel}</button>      
            </div>

        </nav>
    );
};
 
export default Languages;