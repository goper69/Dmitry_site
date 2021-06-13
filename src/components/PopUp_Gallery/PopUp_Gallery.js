import React, {Component} from 'react';
import './PopUp_Gallery.scss';

export default class PopUp_Gallery extends Component 
{
    state =
    {
        slide_counter : "",
        images : []
    }
    
    importAll = () => // повертає робочий список
    {
        let ctx = "";
        switch (this.props.which_checked)
        {
            case 1 : { ctx = require.context("../Portfolio/sheremeta", false, /\.(png|jpe?g|svg)$/); break;}
            case 2 : { ctx = require.context("../Portfolio/BW_collections", false, /\.(png|jpe?g|svg)$/); break;}
            case 3 : { ctx = require.context("../Portfolio/haircuts", false, /\.(png|jpe?g|svg)$/); break;}
            case 4 : { ctx = require.context("../Portfolio/razodeto", false, /\.(png|jpe?g|svg)$/); break;}
            case 5 : { ctx = require.context("../Portfolio/girls", false, /\.(png|jpe?g|svg)$/); break;}
            case 6 : { ctx = require.context("../Portfolio/boys", false, /\.(png|jpe?g|svg)$/); break;}
            case 7 : { ctx = require.context("../Portfolio/folklore_and_fashion", false, /\.(png|jpe?g|svg)$/); break;}
            case 8 : { ctx = require.context("../Portfolio/product", false, /\.(png|jpe?g|svg)$/); break;}
        }
        if(ctx !=="") return ctx.keys().map(ctx);
        else return ctx;
    }

    gallery = React.createRef();
    imgMassLength = 0;
    getImages = () =>
    {
        let imgMass = this.importAll();
        this.imgMassLength = imgMass.length;
        let innerImages = [];
        for(let i = 0; i < imgMass.length;i++)
        {
            innerImages.push
            (
                <div className="img_wrapper" key = {i + "_div"}>
                    <img className = "hidden_img" src={imgMass[i]} alt="Нет изображения" key = {i + "_img"}  onLoad = {(e)=> {e.target.className = "visible_img";}}/> 
                    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            );
        }
        return innerImages;
    }

    scroll_step = 80;
    scroll_location = 0;

    scroll_right = () =>
    {
        if((this.imgMassLength -1) * -this.scroll_step < this.scroll_location)
        {
            this.scroll_location -= this.scroll_step;
            this.gallery.current.style.transform = `translateX(${this.scroll_location}vw)`;
            this.setState(({slide_counter}) => {return {slide_counter : (((this.scroll_location * -1) / this.scroll_step) + 1) + "/" + this.imgMassLength}});
        }
    }

    scroll_left = () =>
    {
        if(this.scroll_location < 0)
        {
            this.scroll_location += this.scroll_step;
            this.gallery.current.style.transform = `translateX(${this.scroll_location}vw)`;
            this.setState(({slide_counter}) => {return {slide_counter : (((this.scroll_location * -1) / this.scroll_step) + 1) + "/" + this.imgMassLength}});
        }
    }
    
    loadImages = () =>
    {
        let newImages = this.getImages();
        this.setState(({slide_counter}) => {return {slide_counter : (((this.scroll_location * -1) / this.scroll_step) + 1) + "/" + this.imgMassLength}});
        this.setState(({images}) => {return {images : newImages}});
    }

    onButtonClick2 = () =>
    {
        this.scroll_location = 0;
        this.gallery.current.style.transform = `translateX(${this.scroll_location}vw)`;
        this.props.onButtonClick();
        this.setState(({images}) => {return {images : []}});
    }

    aboutTitle = () =>
    { 
        let title = "";
        switch(this.props.which_checked) 
        {
            case 1 : {title = "Sheremeta collection";break}
            case 2 : {title = "BW collection";break}
            case 3 : {title = "Haircuts collection";break}
            case 4 : {title = "Razodeto collection";break}
            case 5 : {title = "Girls collection";break}
            case 6 : {title = "Boys collection";break}
            case 7 : {title = "Folklore & Fashion collection";break}
            case 8 : {title = "Product collection";break}
        }
        return title;
    }

    render()
    {
        
        let openClass = this.props.isOpen === false ? "hidden" : "";
        return(
            <div className = {"popUp_block " + openClass}>
    
                <div className="popUp_info_block">
                    <span className="popUp_logo">yatsyna</span>
                    <span className="popUp_about">{this.aboutTitle()}</span>
                    <span className="popUp_counter">{this.state.slide_counter}</span>
                </div>
    
                <div className = "popUp_slider_block">
    
                    <div className="popUp_slider_inner_wrapper">
    
                        <span className="popUp_arrows popUp_left_arrow" onClick = {this.scroll_left}>
                            <svg width="50" height="50" viewBox="0 0 50 50">
                                <g fill="#FFF" fillRule="evenodd" className="popUp_arrows_fill">
                                    <path d="M3 24h47v2H3z"></path>
                                    <path d="M1.075 25.01L14.51 11.575l1.415 1.415L2.49 26.425z"></path>
                                    <path d="M1.075 24.99L14.51 38.425l1.415-1.415L2.49 23.575z"></path>
                                </g>
                            </svg>                
                        </span>
                        <span className="popUp_arrows popUp_right_arrow" onClick = {this.scroll_right}>
                            <svg width="50" height="50" viewBox="0 0 50 50">
                                <g fill="#FFF" fillRule="evenodd" className="popUp_arrows_fill">
                                    <path d="M47 24H0v2h47z"></path>
                                    <path d="M48.925 25.01L35.49 11.575l-1.415 1.415L47.51 26.425z"></path>
                                    <path d="M48.925 24.99L35.49 38.425l-1.415-1.415L47.51 23.575z"></path>
                                </g>
                            </svg>                
                        </span>
    
                        <div className="popUp_slider_gallery" ref = {this.gallery}>
    
                            {[...this.state.images]}
        
                        </div>
                    </div>
    
                </div>
    
                <div className="popUp_closeBtn" onClick = {this.onButtonClick2}>
                    <svg width="50" height="50" viewBox="0 0 50 50">
                        <g fill="#FFF" fillRule="evenodd" className = "popUp_close_icon">
                            <path d="M11.388 10.078l28.284 28.284-1.06 1.06-28.284-28.284z"></path>
                            <path d="M39.672 11.138L11.388 39.422l-1.06-1.06 28.284-28.284z"></path>
                        </g>
                    </svg>
                </div>
    
            </div>
        );
    }

};
 