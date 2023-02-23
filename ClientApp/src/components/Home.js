import React, { Component } from 'react';
import "./home.css";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div class = "main">
            <h1>The companion to your whiskey tasting needs.</h1>
            <p>We'll help you:</p>
        <ul>
          <li>Discover the depth of flavor profiles</li>
          <li>Gain insight into your favorite whiskey</li>
          <li>Explore the cultured side to enjoying whiskey</li>
        </ul>

      </div>
    );
  }
}
