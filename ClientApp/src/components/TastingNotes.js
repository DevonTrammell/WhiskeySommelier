import React, { Component } from 'react';
import '../custom.css';
import { DataCard } from './DataCard';
import Whiskeys from '../StaticWhiskeyData';
import { Card, CardBody, CardImg, CardLink, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import SearchBarStyle from '../SearchBar.css';
import { WhiskeyDataDisplay } from './WhiskeyDataDisplay';

export class TastingNotes extends Component {
    static displayName = TastingNotes.name;

    constructor() {
        super();

        this.state = {
            whiskeys: [], 
            searchTerm: '',
        };

        this.changeSearchTerm = this.changeSearchTerm.bind(this);
        this.dynamicSearch = this.dynamicSearch.bind(this);
        this.getAllData = this.getAllData.bind(this);
    }

    changeSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    dynamicSearch = () => {
        return this.state.whiskeys.filter(whiskey =>
                whiskey.name.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim()) ||
                whiskey.barrel.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim()) ||
                whiskey.type.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim()));
    }

    getAllData() {
        fetch("https://localhost:5001/api/bottles")
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

    componentDidMount() {
        this.getAllData()
    }

    render() {
        let whiskeys = this.dynamicSearch();

        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }

        });

        return (

            //<Card>
            //    <CardLink href='/WhiskeyDetails'>
            //        <CardBody>
            //            <CardImg src= "https://cdn.shopify.com/s/files/1/0576/8085/5207/products/12-year-old-single-bottle_2793b54a-a92f-40ce-9376-7a4c3de4949e_5000x.jpg?v=1648466684"/>                    
            //            <p>
            //            </p>
            //            <h5 class="homeh5">Loch Lomond</h5>                    
            //        </CardBody>
            //    </CardLink>
            //</Card>

            <div className="layout">
                <header className="tasting-notes-header">Tasting Notes</header>
          
                 <div class="wrapper">
                    <div class="form-con search">
                        <form className="searchForm">
                            <input type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.changeSearchTerm}></input>
                            <div></div>
                            <span></span>
                        </form>
                
                      </div>
                   </div>

                <div className='card-container'>
                    {whiskeys.map((e) => {
                        return (
                            <DataCard
                                name={e.name}
                                distiller={e.distiller}
                                age={e.age}
                                barrel={e.barrel}
                                nose={e.nose}
                                palette={e.palette}
                                finish={e.finish}
                                type={e.type}
                                img={e.image}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}