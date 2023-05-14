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
            filterCask: '',
            filterAge: '',
            filterType: ''
        };

        this.changeSearchTerm = this.changeSearchTerm.bind(this);
        this.changeFilterCask = this.changeFilterCask.bind(this);
        this.changeFilterAge = this.changeFilterAge.bind(this);
        this.changeFilterType = this.changeFilterType.bind(this);
        this.dynamicSearch = this.dynamicSearch.bind(this);
        this.getAllData = this.getAllData.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
    }

    changeSearchTerm = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    changeFilterCask = (e) => {
        this.setState({ filterCask: e.target.value });
    }

    changeFilterAge = (e) => {
        this.setState({ filterAge: e.target.value });
    }

    changeFilterType = (e) => {
        this.setState({ filterType: e.target.value });
    }

    dynamicSearch = () => {
        return this.state.whiskeys.filter(whiskey =>
            whiskey.name.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim()) &&
            (this.state.filterCask === '' || whiskey.barrel.toLowerCase() === this.state.filterCask.toLowerCase().trim()) &&
            (this.state.filterAge === '' || whiskey.age === parseInt(this.state.filterAge)) &&
            (this.state.filterType === '' || whiskey.type.toLowerCase() === this.state.filterType.toLowerCase().trim())
        );
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

    resetFilters() {
        this.setState({
            filterCask: '',
            filterAge: '',
            filterType: ''
        });
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
            <div className="layout">
                <header className="tasting-notes-header">Tasting Notes</header>

                <div className="filter-container">
                    <div className="filter">
                        <label htmlFor="filterCask">Cask:</label>
                        <select id="filterCask" value={this.state.filterCask} onChange={this.changeFilterCask}>
                            <option value="">All</option>
                            <option value="Ex-bourbon">Ex-bourbon</option>
                            <option value="Refill American and European Oak">Refill American and European Oak</option>
                            <option value="Oak">Oak</option>
                            <option value="American Oak">American Oak</option>
                            <option value="Bourbon, Refill, and Recharred casks.">Bourbon, Refill, and Recharred casks.</option>
                            <option value="Sherry Oak">Sherry Oak</option>
                            <option value="Jamaican Rum, Barbadian Rum">Jamaican Rum, Barbadian Rum</option>
                            <option value="Charred">Charred</option>
                            <option value="Cognac Casks">Cognac Casks</option>
                            <option value="CHarred American White Oak">Charred American White Oak</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="filterAge">Age:</label>
                        <select id="filterAge" value
                            ={this.state.filterAge} onChange={this.changeFilterAge}>
                            <option value="">All</option>
                            <option value="12">12 years</option>
                            <option value="18">18 years</option>
                            <option value="25">25 years</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="filterType">Type:</label>
                        <select id="filterType" value={this.state.filterType} onChange={this.changeFilterType}>
                            <option value="">All</option>
                            <option value="Bourbon">Bourbon</option>
                            <option value="Scotch">Scotch</option>
                            <option value="Rye">Rye</option>
                            <option value="Rum">Rum</option>

                        </select>
                    </div>
                    <button className="reset-button" onClick={this.resetFilters}>Reset</button>
                </div>
                <div className="wrapper">
                    <div className="form-con search">
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