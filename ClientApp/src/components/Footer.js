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
                            <h4>Whiskey Sommelier</h4>
                            <ui className="list-unstyled">
                                <li>1 University Drive, Sierra Hall 1222</li>
                                <li>Camarillo, 93012, CA</li>
                                <li>United States Of America</li>
                            </ui>
                        </div>
                        {/* Column2 */}
                        <div className="col">
                            <h4>Contact Us</h4>
                            <ui className="list-unstyled">
                                <li>eric.rasmussen371@myci.csuci.edu</li>
                                <li>devon.trammell502@myci.csuci.edu</li>
                                <li>shuhui.yu820@myci.csuci.edu</li>
                                <li>sowmya.kodityala857@myci.csuci.edu</li>
                                <li>tyler.ault288@myci.csuci.edu</li>
                            </ui>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} WHISKEY SOMMELIER | All rights reserved |
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}