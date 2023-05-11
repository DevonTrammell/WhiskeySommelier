import React, { Component } from 'react';
import '../custom.css';
import { DataCard } from './DataCard';
import Whiskeys from '../StaticWhiskeyData';
import { Card, CardBody, CardImg, CardLink, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import SearchBarStyle from '../SearchBar.css';
import { WhiskeyDataDisplay } from './WhiskeyDataDisplay';
import FilterStyle from '../Filter.css';

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
    /*this.filterFunction()*/
        const inputField = document.querySelector('.chosen-value');
        const dropdown = document.querySelector('.value-list');
        const dropdownArray = [...document.querySelectorAll('li')];
        console.log(typeof dropdownArray);
        dropdown.classList.add('open');
        inputField.focus(); // Demo purposes only
        let valueArray = [];
        dropdownArray.forEach(item => {
            valueArray.push(item.textContent);
        });

        const closeDropdown = () => {
            dropdown.classList.remove('open');
        };

        inputField.addEventListener('input', () => {
            dropdown.classList.add('open');
            let inputValue = inputField.value.toLowerCase();
            let valueSubstring;
            if (inputValue.length > 0) {
                for (let j = 0; j < valueArray.length; j++) {
                    if (window.CP.shouldStopExecution(0)) break;
                    if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                        dropdownArray[j].classList.add('closed');
                    } else {
                        dropdownArray[j].classList.remove('closed');
                    }
                } window.CP.exitedLoop(0);
            } else {
                for (let i = 0; i < dropdownArray.length; i++) {
                    if (window.CP.shouldStopExecution(1)) break;
                    dropdownArray[i].classList.remove('closed');
                } window.CP.exitedLoop(1);
            }
        });

        dropdownArray.forEach(item => {
            item.addEventListener('click', evt => {
                inputField.value = item.textContent;
                dropdownArray.forEach(dropdown => {
                    dropdown.classList.add('closed');
                });
            });
        });

        inputField.addEventListener('focus', () => {
            inputField.placeholder = 'Type to filter';
            dropdown.classList.add('open');
            dropdownArray.forEach(dropdown => {
                dropdown.classList.remove('closed');
            });
        });

        inputField.addEventListener('blur', () => {
            inputField.placeholder = 'Select cask';
            dropdown.classList.remove('open');
        });

        document.addEventListener('click', evt => {
            const isDropdown = dropdown.contains(evt.target);
            const isInput = inputField.contains(evt.target);
            if (!isDropdown && !isInput) {
                dropdown.classList.remove('open');
            }
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

            
                <div class="filter">
                    <h7>Filter </h7>
                    <form className="filterForm">
       
                      <input class="chosen-value" type="text" value="" placeholder="Type to filter"></input>
                        <ul class="value-list">
                            <li>American Oak</li>
                            <li>Barbadian Rum</li>
                            <li>Bourbon</li>
                            <li>Charred</li>
                            <li>Cognac</li>
                            <li>European</li>
                            <li>Ex-bourbon</li>
                            <li>Jamaican Rum</li>
                            <li>Recharred</li>
                            <li>Refill</li>
                            <li>Sherry Oak</li>
                            <li>Oak</li>
                            <li>White Oak</li>
                      
              
                        </ul>
                    </form>
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
