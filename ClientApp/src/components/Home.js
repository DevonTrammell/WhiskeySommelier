import React, { Component } from 'react';
/*import "./home.css";*/

export class Home extends Component {
  static displayName = Home.name;

 
  render () {
      return (
        <div class="mainhome">
            <div class="grid-container">
                <div class="grid-item grid-item-1">
                </div>
                <div class="grid-item grid-item-2">
                    <div class="homeh1">
                        <h1>The companion to your whiskey tasting needs</h1>
                    </div>
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
                    <table>
                        <tr>
                            <th1>Featured Whiskey of the Day</th1>
                        </tr>
                        <tr>
                            <td>Picture goes here</td>
                            <td>Name of Whiskey goes here.</td>
                        </tr>
                    </table>
                  </div>


            </div>
      </div>
    );
  }
}
