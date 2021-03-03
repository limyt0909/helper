import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

import 'bootstrap/dist/css/bootstrap.min.css';

const Root = () => (
  <>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Lato"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

export default Root;
