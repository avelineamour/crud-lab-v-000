import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <li key={restaurant.id}><Restaurant restaurant={restaurant} delete={this.props.delete} /><br/></li> )}
      </ul>
    );
  }
};

export default Restaurants;