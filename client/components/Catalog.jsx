import React, { useState } from 'react';

function Catalog() {
  const [items, setItems] = useState([]);

  fetch('/api/products')
    .then(res => res.json())
    .then(resItems => {
      const itemsArr = Array.isArray(resItems) ? resItems : Object.keys(resItems);
      setItems(itemsArr);
    })
  
  return (
    <div id='catalog'>
      {items}
    </div>
  );
}

export default Catalog;