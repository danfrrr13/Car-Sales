import React from 'react';

import { connect } from 'react-redux';

import { removeFeature, addFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { isPropertySignature } from 'typescript';

const App = props => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  const removeFeature = itemId => {
    // dispatch an action here to remove an item
    props.removeFeature(itemId);
  };

  const buyItem = itemId => {
    // dipsatch an action here to add an item
    props.addFeature(itemId);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={buyItem} />
        <Total />
      </div>
    </div>
  );
};

export default connect(null, {
  removeFeature,
  addFeature
})(App);
