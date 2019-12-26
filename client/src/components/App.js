import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  getStatus = () => {
    axios.get('/api').then(res => {
      const { status } = res.data;
      console.log(status);
      this.props.updateStatus(status);
    })
      .catch(err => {
        this.props.updateStatus('Offline')
      })
  }

  render() {
    return (
      <div className="App">
        <p>
          Current status: {this.props.status}
        </p>
        <button onClick={this.getStatus}>Update</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    status: state.status,
  }),
  actions,
)(App);
