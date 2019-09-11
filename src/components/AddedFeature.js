import React from 'react';

const AddedFeature = props => {
  const removeFeature = e => {
    e.preventDefault();
    props.removeFeature(props.feature.id);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
