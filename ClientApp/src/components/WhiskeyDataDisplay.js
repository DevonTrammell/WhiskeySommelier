import React, { Component } from "react";
import '../custom.css';
import '../Global.css';


export class WhiskeyDataDisplay extends React.Component {
    render() {
        return (
            <div className="whiskey_data_page">
                <h1 className="homeh1">{this.props.name}</h1>

                <h1 className="cask_title">Cask</h1>

                <p className="barrel_description">{this.props.barrel}</p>
                
                <h1 className="nose_title">Nose</h1>
                <p className="none_description">{this.props.nose}</p>

                <h1 className="palette_title">Palette</h1>
                <p className="palette_description">{this.props.palette}</p>

                <h1 className="finish_title">Finish</h1>
                <p className="finish_description">{this.props.finish}</p>
                <img className="data_display_image" src={this.props.img} />
            </div>
        )
    }
}