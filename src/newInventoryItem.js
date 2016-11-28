import React from 'react';

function NewInventoryItem(props){
  function handleSubmit(event){
    event.preventDefault();
    const item = event.target.children[1].value
    const quantity = event.target.children[3].value
    props.addInventoryItem(quantity, item)
  }
  return(
    <form onSubmit={handleSubmit.bind(this)}>
      <label>Item</label>
      <input type="text" placeholder="description" />
      <label>Quantity</label>
      <input type="text" placeholder="quantity" />
      <input type="submit" />
    </form>
  )
}

export default NewInventoryItem;
