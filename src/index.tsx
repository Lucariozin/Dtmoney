import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

import { GlobalStyles } from './assets/styles/global-styles';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          category: 'Trabalho',
          type: 'deposit',
          value: 2000,
          createdAt: '2021-08-26T20:35:21.478Z',
        },
        {
          id: 2,
          title: 'Notebook',
          category: 'Compra',
          type: 'withdraw',
          value: 5000,
          createdAt: '2021-08-26T20:35:21.478Z',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
