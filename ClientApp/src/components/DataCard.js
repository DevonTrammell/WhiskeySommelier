import React, { Component } from "react";
import { WhiskeyDataDisplay } from "./WhiskeyDataDisplay"
import '../custom.css';
import '../Global.css';


export class DataCard extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false,
            whiskeys: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }


    render() {  
        return (
            <div>
                {this.state.clicked ?
                    <div className="whiskey_data_display_container">
                    <div className="buttonClass">
                            <span onClick={this.handleClick}></span>
                        </div>

                        <WhiskeyDataDisplay
                                name={this.props.name}
                                nose={this.props.nose}
                                palette={this.props.palette}
                                finish={this.props.finish}
                                barrel={this.props.barrel}
                                img={this.props.img}
                        />
                    </div> :
                    <div>
                        <div className="card" onClick={this.handleClick}>
                            <img className="card-image" src={this.props.img} />
                            <div className="card-body">
                                <h5 className="card-name">{this.props.name}</h5>
                            </div>
                        </div>
                    </div>
            }</div>
            )
        
    }
}
