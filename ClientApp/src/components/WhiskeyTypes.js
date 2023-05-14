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


                            <dt>American Whiskey <div></div></dt>
                            <dd>
                                <div className="inner">


                                    <dt>Bourbon <div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>Bourbon is a distinctly American whiskey hailing from the American South; particularly with strong origins in Kentucky. In order to be formally recognized as a bourbon, a whiskey must be made from a mash being composed of at least 51 percent corn. Barrels must be new charred oak. This combination of mash and barrel requirements creates a whiskey which is sweeter on the palette, often with strong tastes of vanilla, caramel, spices and fruit.</p>

                                        </div>
                                    </dd>   

                                    <dt>Tenessee Whiskey <div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>Tennessee whiskey is a descendant of bourbon. As the name indicates, it is a product of Tennessee, USA. Its defining charactersitic is that the whiskey is filtered though sugar maple charcoal before the aging process. This filtering results in a smoother, sweeter taste.</p>

                                        </div>
                                    </dd> 

                                    <dt>Wheat Whiskey <div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>Wheat whiskey has a mash bill consitingly mostly of wheat grains, and has a more balanced tasting profile in contrast to the bourbon and Tennessee styles.</p>

                                        </div>
                                    </dd> 


                                    <dt>Rye <div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>Rye whiskey is defined by its mash bill containing a minimum of 51% rye. The aging process is the same as Bourbon. Most ryes have a lighter, more bitter taste with notes of pepper</p>

                                        </div>
                                    </dd> 

                                    <dt>Moonshine<div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>Moonshine is an unaged whiskey. The product goes from the still straight to the bottle and can be made with a variety of mash bills, with corn being a popular ingredient. The average concentration of alcohol by volume is stronger than most other types of whiskey, and is a defining trait of the type. The other is the colorless nature of the whiskey, as there has been no barrel to impart additional color.</p>

                                        </div>
                                    </dd> 

                                </div>
                            </dd>



                            <br />
                            <dt>Scotch <div></div></dt>
                                <dd>
                                    <div className="inner">
                                    <p>Scotch is a product of Scotland. The entire country is divided into regions which produce their own defining tasting notes. A scotch must be made of no more than malted barley and water, with optional cereal grains. The malted barley may be treated with smoke, which imparts a distinctlysmokey taste onto the finished whiskey. It may be aged in a variety of barrels, to include Oak, Oloroso Sherry, and used Bourbon barrels. To be considered a scotch, the whiskey must be aged for at least three years in Scotland. Most companies, however, will choose to age their product for 5, 10, 12, 15, or upwards of 20 years in various casks before selling a finished product. The longer the age, the smoother and more refined the taste. Many distillers will choose to blend whiskeys for a product which may have a taste profile greater than the sum of its parts.</p>


                                    <dt>Highland<div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>whisky info.</p>

                                        </div>
                                    </dd>


                                    <dt>Lowland<div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>whisky info.</p>

                                        </div>
                                    </dd>

                                    <dt>Island<div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>whisky info.</p>

                                        </div>
                                    </dd>

                                    <dt>Islay<div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>This is one of the most intense variants of Scotch whiskey. Its main characteristic is its heavy use of peat smoke</p>

                                        </div>
                                    </dd>

                                    <dt>Speyside<div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>whisky info.</p>

                                        </div>
                                    </dd>

                                    <dt>Campbelltown<div></div></dt>
                                    <dd>
                                        <div className="inner">


                                            <p>whisky info.</p>

                                        </div>
                                    </dd>
                                    </div>
                            </dd>

                            <br />
                            <dt>Irish Whiskey <div></div></dt>
                            <dd>
                                <div className="inner">


                                    <p>Irish whiskey is similar to Scotch due to proximity. The largest difference is the general lack of smoke in the taste due to a different process for malting the barley. The end result for most Irish whiskey is a more clear taste of the grains being used.</p>

                                </div>
                            </dd>
                            <br />
                            <dt>Canadian Whiskey <div></div></dt>
                            <dd>
                                <div className="inner">


                                    <p>Canadian whiskey has similarities to American whiskey due to proximity. The rules for defining it are less strict but there is a regular component of rye in the mash bill, albeit a smaller amount then American Rye whiskey. This relaxed standard produces a variety of tastes and characters. </p>

                                </div>
                            </dd>
                            <br />
                            <dt>Japanese Whiskey <div></div></dt>
                            <dd>
                                <div className="inner">


                                    <p>Japanese whiskey takes after the Scottish style of whiskeymaking. These tend to be lighter in character than their Scottish counterparts.</p>

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
