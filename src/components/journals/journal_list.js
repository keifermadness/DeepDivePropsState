import React, { Component } from 'react';

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
    };

  render() {
    return <h2>{ this.props.heading }</h2>
      
  }
}
