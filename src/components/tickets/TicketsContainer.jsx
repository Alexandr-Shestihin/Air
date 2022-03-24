import React from "react";
import { connect } from 'react-redux';
import Tickets from "./Tickets";
import { setDataActionCreator } from '../../Redux/air-Reducer';

const mapStateToProps = (state) => {
   return {
      data: state.airReducer.data,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setData: (data) => dispatch(setDataActionCreator(data)),
   }
}
const TicketsContainer = connect(mapStateToProps, mapDispatchToProps)(Tickets)
export default TicketsContainer;