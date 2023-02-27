import React, { Component } from 'react';
import "./home.css";

export class Home extends Component {
  static displayName = Home.name;

  render () {
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
