import React from "react";
import { connect } from 'react-redux';
import Tickets from "./Tickets";
import { sortIncreaseActionCreator, sortDescendingActionCreator } from '../../Redux/air-Reducer';

const mapStateToProps = (state) => {
   return {
      data: state.airReducer.data,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      sortIncrease: () => dispatch(sortIncreaseActionCreator()),
      sortDescending: () => dispatch(sortDescendingActionCreator())
   }
}
const TicketsContainer = connect(mapStateToProps, mapDispatchToProps)(Tickets)
export default TicketsContainer;