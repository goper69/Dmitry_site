import React, { useState, useEffect } from 'react';
import './Contact_Me.css';
import dimaImg from './background/Slide 3.jpg';
import Languages from '../Languages/Languages';
import Header from '../Header/Header';
import Arrow_Down from '../Arrow_Down/Arrow_Down';

const Contact_Me = () =>
{
    let [language, setLanguage] = useState("en");
    const lang_label =
    {
        ua : {contact_me : "Контакти", contacts : "контакти", mediakit : "медіакіт", download : "завантажити"},
        ru : {contact_me : "Контакты", contacts : "контакты", mediakit : "медиакит", download : "скачать"},
        en : {contact_me : "Contact me", contacts : "contacts", mediakit : "mediakit", download : "download"}
    }

    let onNavClick = (who_active) =>
    {
      setLanguage(language = who_active);
    }

    let header_color = "black";
    let lang = window.localStorage.language;
    let langLab = lang_label[lang];

    let can_i_move = true;
    let slider_scroll = (y) =>
    {
        can_i_move = false;
        let offset = window.pageYOffset;
        let count = 0;
        let difference = (y - offset) / 100;
        let off = offset;
        const _this = this;
        let int = setTimeout(function tick() 
        {      
            switch(count)
            {
                case 0: difference = difference * 1.85; break;
                case 30: difference = difference / 1.5; break; 
                case 40: difference = difference / 1.4; break;
                case 50: difference = difference / 1.4; break; 
                case 60: difference = difference / 1.4; break; 
                case 70: difference = difference / 1.4; break; 
                case 80: difference = difference / 1.4; break;
                case 90: difference = difference / 1.4; break;
                case 100: difference = difference / 1.4; break;    
                case 110: difference = difference / 1.32; break;
                case 120: difference = difference / 1.2; break; 
                case 130: difference = difference / 1.2; break; 
                case 140: difference = difference / 1.3; break; 
                case 150: difference = difference / 1.3; break; 
                case 160: difference = difference / 1.2; break; 
                case 170: difference = difference / 1.2; break; 
                case 180: difference = difference / 1.2; break; 
                case 190: difference = difference / 1.2; break; 
                case 205: difference = difference / 1.15; break; 
                case 215: difference = difference / 1.1; break; 
                case 225: difference = difference / 1.15; break; 
                case 230: difference = difference / 1.25; break;
            }
            if(window.pageYOffset != y)
            {
                off += difference;
                window.scrollTo(0, off);
                ++count;
                int = setTimeout(tick, 1); 
            }
            else can_i_move = true;
        }, 1);
    };

    let scrollBlock = (e) =>
    {
        if(!can_i_move) e.preventDefault();
    }
    useEffect (() =>
    {
        window.addEventListener("wheel", scrollBlock, {passive: false});
        window.addEventListener("touchmove", scrollBlock, { passive: false });
        if(!window.localStorage.language)
        {
          window.localStorage.language = "ua";
          this.onNavClick("ua");
        }
        if(localStorage.getItem("pathname") !== window.location.pathname)
        {
            setTimeout(() =>
            {
              window.scrollTo(0, 0);    
              localStorage.setItem("pathname" , window.location.pathname);
            } ,300);
        } 
        return () => 
        {
            window.removeEventListener("wheel", scrollBlock, {passive: false});
            window.removeEventListener("touchmove", scrollBlock, { passive: false });
        }

    },[]);

    let color = "blackBtn";

    return(
        <div className = "contact_wrapper">
            <Header header_color = {header_color} header_bg = {"bg_white"}/>
            <Languages onNavClick = {onNavClick} color = {color} fixed = "fixed"/>
            <div className = "contact_main">

                <div className = {"contact_main_text " + lang}  >
                    <h2>{langLab.contact_me}</h2>
                </div>

            </div>

            <div className = "contact_contacts">

                <div className = "contact_contacts_inner_wrapper" >
                    <h2>{langLab.contacts}</h2>
                    <div className="contact_contacts_text">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            A, libero molestias modi expedita ducimus reprehenderit harum repellat 
                            ad tenetur dolor excepturi labore, dolorem deleniti suscipit illo 
                            nulla, ab veritatis fuga. tenetur dolor excepturi laboretenetur dolor excepturi laboretenetur dolor excepturi labore
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 

                            A, libero molestias modi expedita ducimus reprehenderit harum repellat 
                            ad tenetur dolor excepturi labore, dolorem deleniti suscipit illo 
                            nulla, ab veritatis fuga.tenetur dolor excepturi laboret enetur dolor excepturi labore
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 

                            A, libero molestias modi expedita ducimus reprehenderit harum repellat 
                            ad tenetur dolor excepturi labore, dolorem deleniti suscipit illo 
                            nulla, ab veritatis fuga.tenetur dolor excepturi labore
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            
                            A, libero molestias modi expedita ducimus reprehenderit harum repellat 
                            ad tenetur dolor excepturi labore, dolorem deleniti suscipit illo 
                            nulla, ab veritatis fuga.tenetur dolor 
                        </span>
                    </div>
                </div>

            </div>

            <div className = "contact_mediakit">

                <div className = "contact_mediakit_inner_wrapper" >
                    <div className="contact_mediakit_img_wrapper">
                        <img src= {dimaImg} id= "dimaImg" alt=""/>
                        <h2>{langLab.mediakit}</h2>
                    </div>
                    <div className="contact_mediakit_download">
                        <button><a href="./background/Contact me.jpg" download = "">{langLab.download}</a></button>
                    </div>
                </div>

            </div>

            <div className = "contact_footer">
                <Arrow_Down slider_scroll = {slider_scroll} y = {0} reverse = {"reverse"}/>
            </div>

        </div>
    );
};
 
export default Contact_Me;