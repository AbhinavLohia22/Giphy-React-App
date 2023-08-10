import React from 'react';

function Autocomplete({ queryNow, suggestions, onSelect }) {

  if (queryNow === '') return;

  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => onSelect(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

export default Autocomplete;
