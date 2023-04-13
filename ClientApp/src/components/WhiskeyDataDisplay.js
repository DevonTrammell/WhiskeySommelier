import React, { Component } from "react";
import '../custom.css';
import '../Global.css';


export class WhiskeyDataDisplay extends React.Component {
    render() {
        return (
            <div className="whiskey_data_display_container">
                <h1 className="homeh1">{this.props.name}</h1>

                <h1 className="homeh1">Cask</h1>

                <p>Bourbon, Refill, and Recharred casks.</p>
                
                <h1 className="homeh1">Nose</h1>
                <p>{this.props.nose}</p>

                <h1 className="homeh1">Palette</h1>
                <p>{this.props.palette}</p>

                <h1 className="homeh1">Finish</h1>
                <p>{this.props.finish}</p>
                <img className="card-image" src={this.props.img} />
            </div>
        )
    }
}