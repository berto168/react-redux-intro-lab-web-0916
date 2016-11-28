import React from 'react';

function InventoryList(props){
  const items = props.inventoryItems.map((item, i) => {
    return (
      <li key={i}>
        item: {item.description}, quantity: {item.quantity}
      </li>
    )
  })

  return (
    <ul>
      {items}
    </ul>
  )
}

export default InventoryList;
