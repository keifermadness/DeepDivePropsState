import React, { Component } from 'react';
import { JournalEntry } from './journal_entry'

const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post Two', content: 'Post content', status: 'publsihed' },
    { title: 'Post Three', content: 'Post content', status: 'published' },
    { title: 'Post Four', content: 'Post content', status: 'published' },

];

//Class Component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: 'Hi there',
            isOpen: true 
        };
    }

    clearEntries() {
        this.setState({ journalData: [], isOpen: false });
    };

    showAllEntries() {
        this.setState({ journalData: rawJournalData, isOpen: true});
    }

  render() {
    const journalEntries = this.state.journalData.map(journalEntry => {
        return (
            <div key={journalEntry.title}>
                <JournalEntry title={journalEntry.title} 
                content={journalEntry.content} 
                />
            </div>
        );
    });

    return( 
        <div>
            <h2>{ this.props.heading }</h2>
            {journalEntries}

            <button onClick={() => this.clearEntries()}>Clear Journal Entries</button>
            <button onClick={() => this.showAllEntries()}>Show All Entries</button>
        </div>
    );
  }
}
