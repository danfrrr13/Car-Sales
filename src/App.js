import React from 'react';

import { connect } from 'react-redux';

import { removeFeature, addFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {

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
