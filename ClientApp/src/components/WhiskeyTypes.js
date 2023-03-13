import React, { Component } from 'react';

export class WhiskeyTypes extends Component {
    static displayName = WhiskeyTypes.name;

    render() {
        return (
            <div>
                <div class="globalWrapper">
                    <div>
                        <h1 class="homeh1">Whiskey Types</h1>
                        <h2>Stay tuned for more types of whiskey!</h2>

                        <h3>Bourbon</h3>
                        <h4>Associated Region:</h4>
                        <p>American South; Kentucky</p>
                        <h4>Characteristics:</h4>

                        <h3>Scotch</h3>
                        <h4>Associated Region:</h4>
                        <p>Scotland</p>
                        <h4>Characteristics:</h4>

                        <h3>Irish Whiskey</h3>
                        <h4>Associated Region:</h4>
                        <p>Ireland</p>
                        <h4>Characteristics:</h4>
                    </div>
                </div>
            </div>
        );
    }
}
