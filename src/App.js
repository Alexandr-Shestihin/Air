import './App.css';
import './_null_style.css';
import React from 'react';
import TicketsContainer from './components/tickets/TicketsContainer';
import MainMenuContainer from './components/mainMenu/MainMenuContainer';

//data = data.result.flights.sort((a, b) => a.flight.price.total.amount > b.flight.price.total.amount ? 1 : -1)

function App() {

   /*const sortData = (sortValue) => {
     switch (sortValue) {
        case 'increase':
           return data.result.flights.sort((a, b) => +a.flight.price.total.amount > +b.flight.price.total.amount ? 1 : -1)
        case 'descending':
           return data.result.flights.sort((a, b) => +a.flight.price.total.amount < +b.flight.price.total.amount ? 1 : -1)
        case 'defaultData':
           return data.result.flights
        default:
           break;
     }
  } */

   // let r = sortData('descending')
   return (
      <div className="App">
         <MainMenuContainer />
         <TicketsContainer />
      </div >
   )
}
export default App;
