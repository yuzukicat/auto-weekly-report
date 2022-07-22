import React, { Component } from 'react';
import Header from './HeaderComponent';
import Report from './ReportComponent';
import Task from './TaskComponent';
import Footer from './FooterComponent';
import {
  Routes,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    lastweek: state.lastweek,
    nextweek: state.nextweek,
    tasks: state.tasks
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="report" element={ <Report lastweek={this.props.lastweek} nextweek={this.props.nextweek} /> }>
          </Route>
          <Route path="tasks" element={ <Task tasks={this.props.tasks} /> }>
          </Route>
        </Routes>   
        <Footer />
      </div>
    );
  }
}

export default (connect(mapStateToProps)(Main));