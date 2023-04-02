import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { TastingIntro } from './components/TastingIntro';
import { WhiskeyTypes} from './components/WhiskeyTypes';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/TastingIntro' component={TastingIntro} />
        <Route path='/WhiskeyTypes' component={WhiskeyTypes} />
      </Layout>
    );
  }
}
