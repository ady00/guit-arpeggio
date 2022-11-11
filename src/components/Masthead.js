import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { textifyAccidental } from '../helpers';
import '../css/Masthead.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

class Masthead extends Component {

  constructor() {
    super();
    this.state = {
      opened : false
    }
  }

  mastheadToggle() {
    ( this.state.opened === false ) ? this.setState({opened : true}) : this.setState({opened : false});
  }

  render() {
    return (
      <header className={this.state.opened === true ? "Masthead Active" : "Masthead"} role="banner">
        <div className="Masthead-BG" onClick={() => this.mastheadToggle()}></div>
        <button className="Masthead-Toggle" onClick={() => this.mastheadToggle()}><i></i><i></i><i></i></button>
        <PerfectScrollbar option={{suppressScrollX : false}}>
          <div className="Masthead-Sections">
            <section>
              <h1>Arpeggio</h1>
              <p>A web app that spits out a chord and its formula, given a set of notes. WIP.</p>
            </section>
            <section>
            </section>
          </div>
        </PerfectScrollbar>
      </header>
    );
  }

}

export default Masthead;