import React, { Component } from 'react';
import '../custom.css';
import { DataCard } from './DataCard';
import Whiskeys from '../StaticWhiskeyData';
import { Card, CardBody, CardImg, CardLink, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { WhiskeyDataDisplay } from './WhiskeyDataDisplay';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            whiskeys: []
        };

        this.getAllData = this.getAllData.bind(this)
        this.sortDataByFilter = this.sortDataByFilter.bind(this)
    }
    getAllData() {
        fetch("https://localhost:5001/api/bottles")
            .then(res => res.json())
            .then(
                (whiskeys) => {
                    this.setState({ whiskeys: whiskeys });
                },
                (error) => {
                    alert(error);
                }
        )
    }
    sortDataByFilter(filter) {
        var filteredWhiskeys = this.state.whiskeys;

        filter = filter.toLowerCase;

        filteredWhiskeys.sort((a, b) => {
            return a[filter] >= b[filter]
                ? 1
                : -1
        })

        this.setState({ whiskeys: filteredWhiskeys });
    }

   
    render() {


        return (
            <div class="mainhome">
                <div class="grid-container">
                    <div class="grid-item grid-item-1">
                    </div>
                    <div class="grid-item grid-item-2">
                        <h1 class="home1">The companion to your whiskey tasting needs</h1>
                        <div class="homep1">
                            <p1>We'll help you:</p1>
                        </div>
                        <div class="homeul">
                            <ul>
                                <li>Discover the depth of flavor profiles</li>
                                <li>Gain insight into your favorite whiskey</li>
                                <li>Explore the cultured side to enjoying whiskey</li>
                            </ul>
                        </div>
                    </div>
                   
                    <div class="grid-item grid-item-3">
                        <div class="homep2">
                            <p2>Stay tuned for updates to the site!</p2>
                        </div>
                        <ul1>
                            <li>Search for your favorite whiskey</li>
                            <li>Detailed flavor analysis</li>
                        </ul1>
                    </div>
                    <div class="grid-item grid-item-4">
                    </div>
                    <div class="grid-item grid-item-5">
                        <h7>Featured Whiskey of the Week:</h7>
                        <DisplayData id={1} />



                    </div>
                    <div class="grid-item grid-item-6">
                    </div>
                    <div class="grid-item grid-item-7">
                    </div>
                    <div class="grid-item grid-item-8">
                    </div>
                    <div class="grid-item grid-item-9">
                    </div>
                </div>
            </div>
        );
    }
}
function DisplayData({ id }) {
    const item = Whiskeys.find(item => item.id === id);

    if (!item) {
        return <p>Item not found</p>;
    }
    return (
        <div>
            <h2>{item.name}</h2>
            <h3>{item.type}</h3>
            {item.image && (
                <img src={item.image} alt={item.name} />
            ) }
        </div>
    )
}