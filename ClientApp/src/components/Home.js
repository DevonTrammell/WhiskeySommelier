import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Whiskey Sommelier</h1>
            <p>Your key to your whiskey tasting needs.</p>
            <p>We'll help you:</p>
        <ul>
          <li>Discover the depth of flavor profiles</li>
          <li>Gain insight into your favorite whiskey</li>
          <li>Explore the cultured side to enjoying whiskey</li>
        </ul>
        <p></p>

      </div>
    );
  }
}
