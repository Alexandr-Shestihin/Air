import React from "react";
import { connect } from "react-redux";
import MainMenu from "./MainMenu";
import { sortAscendingActionCreator, sortDescendingActionCreator, byTravelTimeAC } from "../../Redux/air-Reducer";

const mapStateToProps = (state) => {
   return {

   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      sortAscending: () => dispatch(sortAscendingActionCreator()),
      sortDescending: () => dispatch(sortDescendingActionCreator()),
      travelTime: () => dispatch(byTravelTimeAC())
   }
}

const MainMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainMenu)
export default MainMenuContainer;