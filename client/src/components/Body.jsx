import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Upload from './Upload.jsx';
import About from './About.jsx';
import Chart from './Chart.jsx';
import Dashboard from './Dashboard.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidUpdate() {
    // console.log(typeof this.state.data);
    // console.log(this.state.data);
  }

  updateState(key) {
    let context = this;
    return (value, cb) => {
      // console.log(value);
      context.setState({
        [key]: value
      }, cb);
    }
  }

  render() {
    return (

      <Switch>
        <Route
          exact path='/'
          component={ Home }
        />

        <Route
          path='/upload'
          render={ () => {
            return (<Upload updateData={this.updateState('data')} data={this.state.data} />)
          } }
        />

        <Route path='/about'
          component={ About }
        />

        <Route path='/chart'
          render={ () => {
            return (<Chart data={this.state.data} />)
          } }
        />

        <Route path='/dashboard'
          component={ Dashboard }
        />

      </Switch>
    );
  }
}

export default Body;