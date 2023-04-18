import React, { Component } from 'react';
import '../Global.css';
import Whiskeys from '../StaticWhiskeyData';

export class WhiskeyDetails extends Component {
    static displayName = WhiskeyDetails.name;


    render() {
        return (
            <div className="layout">
                <h1 className="homeh1">
                    Loch Lomond 12 Year
                </h1>

                <h1 className="homeh1">
                    Cask
                </h1>

                <p>
                    Bourbon, Refill, and Recharred casks.
                </p>
                
                <h1 className="homeh1">
                    Nose
                </h1>
                <p>
                    Crisp green apple, ripe pear and refreshing citrus lemon with background notes of golden cereal.
                </p>

                <h1 className="homeh1">
                    Palette
                </h1>
                <p>
                    Orchard fruits and lemon meringue. The deep fruity character of pear lead into citrus lemon, vanilla meringue and light biscuit sweetness.
                </p>

                <h1 className="homeh1">
                    Finish
                </h1>
                <p>
                    Medium in length with gentle wood smoke and a lingering peaty tang.
                </p>

            </div>
        );
    }
}