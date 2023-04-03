import React, { Component } from "react";
import '../custom.css';


export class DataCard extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-image" src={this.props.img} />
                <div className="card-body">
                    <h2 className="card-barrel">{this.props.barrel}</h2>
                    <p className="card-description">Description.</p>
                    <h5 className="card-name">{this.props.name}</h5>
                </div>
            </div>
        )
    }
}