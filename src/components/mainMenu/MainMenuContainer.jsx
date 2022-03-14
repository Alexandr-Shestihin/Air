import React, { useState } from "react";
import { connect } from "react-redux";
import MainMenu from "./MainMenu";
import { sortIncreaseActionCreator, sortDescendingActionCreator } from "../../Redux/air-Reducer";

const mapStateToProps = (state) => {
   return {

   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      sortIncrease: () => dispatch(sortIncreaseActionCreator()),
      sortDescending: () => dispatch(sortDescendingActionCreator()),
   }
}

const MainMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainMenu)
export default MainMenuContainer;