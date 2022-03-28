import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from './ticket/Ticket'
import s from './tickets.module.css'

const Tickets = () => {
  const data = useSelector(state => state.airReducer.data)
  return (
    <div className={s.tickets}>
      <div className={s.logoContainer}>
        {data.map((obj) => (
          <Ticket
            key={obj.flightToken.slice(90, 100)}
            amount={obj.flight.price.total.amount}
            passengerType={
              obj.flight.price.passengerPrices[0].passengerType.caption
            }
            departureCity={obj.flight.legs[0].segments[0].departureCity.caption}
            departureUid={obj.flight.legs[0].segments[0].departureAirport.uid}
            departureAirport={
              obj.flight.legs[0].segments[0].departureAirport.caption
            }
            arrivalCity={obj.flight.legs[0].segments[1].arrivalCity.caption}
            arrivalUid={obj.flight.legs[0].segments[1].arrivalAirport.uid}
            arrivalAirport={
              obj.flight.legs[0].segments[1].arrivalAirport.caption
            }
            //departureDate={obj.flight.legs[0].segments[0].departureDate}
            departureDate={obj.flight.legs[0].segments[0].departureDate}
            arrivalDate={obj.flight.legs[0].segments[1].arrivalDate}
            countHoursTravel={obj.flight.legs[0].duration.countHoursTravel}
            countMinutesTravel={obj.flight.legs[0].duration.countMinutesTravel}
            carrier={obj.flight.carrier.caption}
            departureCity1={
              obj.flight.legs[1].segments[0].departureCity.caption
            }
            departureUid1={obj.flight.legs[1].segments[0].departureAirport.uid}
            departureAirport1={
              obj.flight.legs[1].segments[0].departureAirport.caption
            }
            arrivalCity1={obj.flight.legs[1].segments[1].arrivalCity.caption}
            arrivalUid1={obj.flight.legs[1].segments[1].arrivalAirport.uid}
            arrivalAirport1={
              obj.flight.legs[1].segments[1].arrivalAirport.caption
            }
            //departureDate1={obj.flight.legs[1].segments[0].departureDate}
            departureDate1={obj.flight.legs[1].segments[0].departureDate}
            arrivalDate1={obj.flight.legs[1].segments[1].arrivalDate}
            countHoursTravel1={obj.flight.legs[1].duration.countHoursTravel}
            countMinutesTravel1={obj.flight.legs[1].duration.countMinutesTravel}
            carrier1={obj.flight.carrier.caption}
          />
        ))}
      </div>
    </div>
  )
}
export default Tickets
