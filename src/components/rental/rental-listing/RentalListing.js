import React, { Component } from 'react';
import RentalList from './RentalList';
import { connect } from 'react-redux';
import * as actions from '../../../actions'
class RentalListing extends Component {







  componentWillMount() {
    this.props.dispatch(actions.fetchRentals())
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="title text-center m-3">Feel Like Home Where ever you Go</h1>
        <RentalList rentals={this.props.rentals} />
      </section>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    rentals: state.rentals.data
  }
}

export default connect(mapStateToProp)(RentalListing)
