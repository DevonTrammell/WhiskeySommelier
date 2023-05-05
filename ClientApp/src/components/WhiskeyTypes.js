import React, { Component } from 'react';
import $ from 'jquery';
import '../Global.css';

export class WhiskeyTypes extends Component {
    static displayName = WhiskeyTypes.name;


    componentDidMount() {
        // initialize accordion functionality
        $('.accordion dt').on('click', function () {
            $(this).toggleClass('open');
            $(this).next('.inner').slideToggle();
        });
    }

    render() {
        return (
            <div class="tastingBackground">
                <div class="globalWrapper">
                    <div class="tastingBackground2">
                        <h1 class="homeh1">Whiskey Types</h1>
                        <h5 class="homeh5">Stay tuned for more types of whiskey!</h5>
                        <br />
                        <dl className="accordion">
                            <dt>Bourbon <div></div></dt>
                            <dd>
                                <div className="inner">
                                  
                    
                              <p>Bourbon is a distinctly American whiskey hailing from the American South; particularly with strong origins in Kentucky. In order to be formally recognized as a bourbon, a whiskey must be made from a mash being composed of at least 51 percent corn. Barrels must be new charred oak. This combination of mash and barrel requirements creates a whiskey which is sweeter on the palette, often with strong tastes of vanilla, caramel, spices and fruit.</p>
        
                                </div>
                            </dd>
                     
                            <dt>Scotch <div></div></dt>
                                <dd>
                                    <div className="inner">
                                    <p>Scotch is a product of Scotland. The entire country is divided into regions which produce their own defining tasting notes. A scotch must be made of no more than malted barley and water, with optional cereal grains. The malted barley may be treated with smoke, which imparts a distinctlysmokey taste onto the finished whiskey. It may be aged in a variety of barrels, to include Oak, Oloroso Sherry, and used Bourbon barrels. To be considered a scotch, the whiskey must be aged for at least three years in Scotland. Most companies, however, will choose to age their product for 5, 10, 12, 15, or upwards of 20 years in various casks before selling a finished product. The longer the age, the smoother and more refined the taste. Many distillers will choose to blend whiskeys for a product which may have a taste profile greater than the sum of its parts.</p>
                                    </div>
                                </dd>
          
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                      
                            <br />
                            <br />
                            <br />
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}
