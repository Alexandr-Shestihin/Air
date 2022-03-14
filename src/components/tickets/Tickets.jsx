import React from "react";
import Ticket from "./ticket/Ticket";
import s from "./tickets.module.css";

const Tickets = ({ data }) => {
   return (
      <div className={s.tickets}>
         <div className={s.logoContainer}>

            {
               data.map(obj => <Ticket
                  amount={obj.flight.price.total.amount}
                  passengerType={obj.flight.price.passengerPrices[0].passengerType.caption}

                  departureCity={obj.flight.legs[0].segments[0].departureCity.caption}
                  departureUid={obj.flight.legs[0].segments[0].departureAirport.uid}
                  departureAirport={obj.flight.legs[0].segments[0].departureAirport.caption}

                  arrivalCity={obj.flight.legs[0].segments[1].arrivalCity.caption}
                  arrivalUid={obj.flight.legs[0].segments[1].arrivalAirport.uid}
                  arrivalAirport={obj.flight.legs[0].segments[1].arrivalAirport.caption}

                  departureDate={obj.flight.legs[0].segments[0].departureDate}
                  arrivalDate={obj.flight.legs[0].segments[1].arrivalDate}

                  carrier={obj.flight.carrier.caption}

                  departureCity1={obj.flight.legs[1].segments[0].departureCity.caption}
                  departureUid1={obj.flight.legs[1].segments[0].departureAirport.uid}
                  departureAirport1={obj.flight.legs[1].segments[0].departureAirport.caption}

                  arrivalCity1={obj.flight.legs[1].segments[1].arrivalCity.caption}
                  arrivalUid1={obj.flight.legs[1].segments[1].arrivalAirport.uid}
                  arrivalAirport1={obj.flight.legs[1].segments[1].arrivalAirport.caption}

                  departureDate1={obj.flight.legs[1].segments[0].departureDate}
                  arrivalDate1={obj.flight.legs[1].segments[1].arrivalDate}

                  carrier1={obj.flight.carrier.caption}

                  button={false}

               />)
            }
         </div>
      </div >
   )
}
export default Tickets;