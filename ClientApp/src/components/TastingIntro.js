import React, { Component } from 'react';

export class TastingIntro extends Component {
    static displayName = TastingIntro.name;

    render() {
        return (
            <div>
                <h1>Introduction to Whiskey Tasting</h1>
                <p>If you're new to whiskey tasting, here's the info you need to start: </p>
                <ul>
                    <li>Whiskey</li>
                    <li>Glassware</li>
                    <li>Tasting Notes</li>
                    <li>Flavor Samples</li>
                    <li>Nose Samples</li>
                    <li>Water</li>
                    <li>Palette</li>
                    
                </ul>
                
            </div>
        );
    }
}
