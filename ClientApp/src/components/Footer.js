import React, { Component } from 'react';
import "../Global.css";

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col">
                            Whiskey Sommelier | <a href="mailto:tyler.ault288@myci.csuci.edu">Contact Us</a>
                        </div>
                    <div className="col">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} All Rights Reserved, Whiskey Sommelier
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}