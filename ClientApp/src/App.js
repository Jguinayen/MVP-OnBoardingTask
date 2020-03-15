import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
import { FetchCustomer } from './components/FetchCustomer';
import { FetchProduct } from './components/FetchProduct';
import { FetchStore } from './components/FetchStore';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/fetch-customer' component={FetchCustomer} />
            <Route path='/fetch-product' component={FetchProduct} />
            <Route path='/fetch-store' component={FetchStore} />
      </Layout>
    );
  }
}
