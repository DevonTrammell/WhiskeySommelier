import React, { Component } from 'react';
import '../custom.css';
import { DataCard } from './DataCard';
import Whiskeys from '../StaticWhiskeyData';

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
            <div className="layout">
                <header className="tasting-notes-header">Tasting Notes</header>
                <div className='card-container'>
                    {Whiskeys.map((e) => {
                        return (
                            <DataCard
                                img={e.image}
                                barrel={e.barrel}
                                name={e.name} />
                        );
                    })}
                </div>
            </div>
        );
    }
}