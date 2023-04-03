import React, { Component } from 'react';
import '../custom.css';
import { DataCard } from './DataCard';
import Whiskeys from '../StaticWhiskeyData';
import { Card, CardBody, CardImg, CardLink, CardText, CardTitle, CardSubtitle } from 'reactstrap';

export class TastingNotes extends Component {
    static displayName = TastingNotes.name;

    constructor(props) {
        super(props);
        this.state = {
            whiskeys: []
        };

        this.getAllData = this.getAllData.bind(this)
        this.sortDataByFilter = this.sortDataByFilter.bind(this)
    }
    getAllData() {
        fetch("https://localhost:44373/api/bottles")
            .then(res => res.json())
            .then(
                (whiskeys) => {
                    this.setState({ whiskeys: whiskeys });
                },
                (error) => {
                    alert(error);
                }
            )
    }
    sortDataByFilter(filter) {
        var filteredWhiskeys = this.state.whiskeys;

        filter = filter.toLowerCase;

        filteredWhiskeys.sort((a, b) => {
            return a[filter] >= b[filter]
                ? 1
                : -1
        })

        this.setState({ whiskeys: filteredWhiskeys });
    }

    render() {
        return (

            <Card>
                <CardLink href='/WhiskeyDetails'>
                    <CardBody>
                        <CardImg src= "https://cdn.shopify.com/s/files/1/0576/8085/5207/products/12-year-old-single-bottle_2793b54a-a92f-40ce-9376-7a4c3de4949e_5000x.jpg?v=1648466684"/>                    
                        <p>
                        </p>
                        <h5 class="homeh5">Loch Lomond</h5>                    
                    </CardBody>
                </CardLink>
            </Card>

            //<div className="layout">
            //    <header className="tasting-notes-header">Tasting Notes</header>
            //    <div className='card-container'>
            //        {Whiskeys.map((e) => {
            //            return (
            //                <DataCard
            //                    img={e.image}
            //                    barrel={e.barrel}
            //                    name={e.name} />
            //            );
            //        })}
            //    </div>
            //</div>
        );
    }
}