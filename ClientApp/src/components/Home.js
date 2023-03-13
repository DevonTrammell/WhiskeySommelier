import React, { Component } from 'react';
import "../Global.css";
import "./home.css";

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
        fetch("https://localhost:44373/api/bottles")
            .then(res => res.json())
            .then(
                (whiskeys) => {
                    this.setState({ whiskeys: whiskeys });
                },
                (error) => {
                    alert(error);
                }
        )
        alert(this.state.whiskeys[0].name)
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
        alert(this.state.whiskeys[0].name);
    }
   
    render() {
        return (
            <div class="main">
                <div class="grid-container">
                    <div class="grid-item grid-item-1">
                    </div>
                    <div class="grid-item grid-item-2">
                        <h1>The companion to your whiskey tasting needs</h1>
                        <p1>We'll help you:</p1>
                        <ul>
                            <li>Discover the depth of flavor profiles</li>
                            <li>Gain insight into your favorite whiskey</li>
                            <li>Explore the cultured side to enjoying whiskey</li>
                        </ul>
                    </div>
                    <table class="display-table" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Distiller</th>
                                <th>Age</th>
                                <th>Barrel</th>
                                <th>Nose</th>
                                <th>Palette</th>
                                <th>Finish</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.whiskeys.map(whiskey =>
                                <tr>
                                    <td>{whiskey.name}</td>
                                    <td>{whiskey.distiller}</td>
                                    <td>{whiskey.age}</td>
                                    <td>{whiskey.barrel}</td>
                                    <td>{whiskey.nose}</td>
                                    <td>{whiskey.palette}</td>
                                    <td>{whiskey.finish}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div class="grid-item grid-item-3">
                        <p2>Stay tuned for updates to the site!</p2>
                        <ul1>
                            <li>Search for your favorite whiskey</li>
                            <li>Detailed flavor analysis</li>
                        </ul1>
                    </div>
                </div>
            </div>
        );
    }
}