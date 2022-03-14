import data from '../data.json';
const INCREASE = "INCREASE";
const DESCENDING = "DESCENDING";

const initialised = {
   data: data.result.flights,
}
const airReducer = (state = initialised, action) => {

   switch (action.type) {
      case INCREASE: {
         let result = state.data.sort((a, b) => +a.flight.price.total.amount > +b.flight.price.total.amount ? 1 : -1)
         debugger
         return {
            ...state,
            data: result,
         }
      }
      case DESCENDING: {
         let result1 = state.data.sort((a, b) => +a.flight.price.total.amount < +b.flight.price.total.amount ? 1 : -1)
         return {
            ...state,
            data: result1,
         }
      }

      default:
         return state
   }
}

export const sortIncreaseActionCreator = () => {
   return { type: INCREASE }
}

export const sortDescendingActionCreator = () => {
   return { type: DESCENDING }
}

export default airReducer;