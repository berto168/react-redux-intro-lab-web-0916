import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getInventoryListItems, addInventoryListItem } from './actions/inventoryItemsActions';
import {bindActionCreators} from 'redux';
import InventoryList from './inventoryList'
import NewInventoryItem from './newInventoryItem'

class App extends Component {
  componentWillMount() {
    this.props.getInventoryListItems()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <InventoryList inventoryItems={this.props.items}/>
          <NewInventoryItem addInventoryItem={this.props.addInventoryListItem}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {items: state.inventoryItemsReducer}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getInventoryListItems,
    addInventoryListItem
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
