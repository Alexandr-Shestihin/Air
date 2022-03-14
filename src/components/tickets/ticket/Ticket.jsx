import React from "react";
import s from "./ticket.module.css";

const Ticket = (props) => {

   const showDepartureTime = (date) => {
      return date.slice(date.indexOf('T') + 1).slice(0, -3)
   }
   const showDepartureDate = (date) => {
      const month = [
         'янв.',
         'фев.',
         'мар.',
         'апр.',
         'май.',
         'июн.',
         'июл.',
         'авг.',
         'сен.',
         'окт.',
         'ноя.',
         'дек.',
      ]
      return (
         date.slice(0, -date.indexOf('T') + 1).slice(8) + ' ' +
         month[Number(date.slice(0, -date.indexOf('T') - 2).slice(5)) - 1]
      )
   }

   const CountTime = (departure, arrival) => {
      const time1 = departure.slice(departure.indexOf('T') + 1).slice(0, -3);
      const date1 = departure.slice(8, -departure.indexOf('T') + 1);

      const time2 = arrival.slice(arrival.indexOf('T') + 1).slice(0, -3);
      const date2 = arrival.slice(8, -arrival.indexOf('T') + 1);

      const start = time1.split(":");
      const end = time2.split(":");

      var startDate = new Date(0, 0, 0, start[0], start[1], 0);
      var endDate = new Date(0, 0, 0, end[0], end[1], 0);

      var diff = endDate.getTime() - startDate.getTime();
      var hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      var minutes = Math.floor(diff / 1000 / 60);
      if (hours < 0)
         hours = hours + 24;
      return (hours <= 9 ? "0" : "") + hours + " ч " + (minutes <= 9 ? "0" : "") + minutes + " мин ";
   }

   const changeButton = () => {
      props.button = !props.button
   }

   return (
      <div className={s.ticketContainer}>

         <div className={s.ticketHeaderContainer}>
            <div className={s.ticketHeader}>
               {props.amount} ₽
               <span>
                  {props.passengerType === 'Взрослый' ? 'Стоимость для одного взрослого пассажира' : 'Стоимость для одного детского места'}
               </span>
            </div>
         </div>

         <div className={s.text}>
            {props.departureCity}, {props.departureAirport}
            <span className={s.textBlue}> ({props.departureUid})🠒</span>
            {props.arrivalCity}, {props.arrivalAirport}
            <span className={s.textBlue}> ({props.arrivalUid})</span>
         </div>
         <div className={s.line}></div>

         <div className={s.timeContainer}>
            <div className={s.text}>
               <span>{showDepartureTime(props.departureDate)}</span>
               <span className={s.textBlue}> {showDepartureDate(props.departureDate)}</span>
            </div>
            <div className={s.text}>🕓 {CountTime(props.arrivalDate, props.departureDate)}</div>
            <div className={s.text}>
               <span className={s.textBlue}> {showDepartureDate(props.arrivalDate)} </span>
               <span>{showDepartureTime(props.arrivalDate)}</span>
            </div>
         </div>
         <div className={s.containerLine}>
            <div className={s.line}></div>
            <div className={s.textOrange}>1 пересадка</div>
            <div className={s.line}></div>
         </div>
         <div className={`${s.carrierName} ${s.text}`}>Рейс выполняет: {props.carrier}</div>
         <div className={`${s.line} ${s.line_b}`}></div>

         <div className={s.text}>
            {props.departureCity1}, {props.departureAirport1}
            <span className={s.textBlue}> ({props.departureUid1})🠒</span>
            {props.arrivalCity1}, {props.arrivalAirport1}
            <span className={s.textBlue}> ({props.arrivalUid1})</span>
         </div>
         <div className={s.line}></div>

         <div className={s.timeContainer}>
            <div className={s.text}>
               <span>{showDepartureTime(props.departureDate1)}</span>
               <span className={s.textBlue}> {showDepartureDate(props.departureDate1)}</span>
            </div>
            <div className={s.text}>🕓 {CountTime(props.arrivalDate1, props.departureDate1)}</div>
            <div className={s.text}>
               <span className={s.textBlue}> {showDepartureDate(props.arrivalDate1)} </span>
               <span>{showDepartureTime(props.arrivalDate1)}</span>
            </div>
         </div>
         <div className={s.containerLine}>
            <div className={s.line}></div>
            <div className={s.textOrange}>1 пересадка</div>
            <div className={s.line}></div>
         </div>
         <div className={`${s.carrierName} ${s.text}`}>Рейс выполняет: {props.carrier1}</div>

         {!props.button ? <button onChange={changeButton}>выбрать</button> : <button>выбрано</button>}
      </div >
   )
}
export default Ticket;