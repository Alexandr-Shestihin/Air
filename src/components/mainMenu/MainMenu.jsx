import React, { useState } from "react";
import s from "./mainMenu.module.css";

const MainMenu = (props) => {
   const [radioChecked, setRadioChecked] = useState(0);
   const radioButtonChanged = (e) => {
      let result = e.target.id;
      setRadioChecked(result)
   }
   return (
      <div className={s.mainMenu} >
         <div className={s.sort}>
            <ul className={s.text} >
               <li>
                  <input
                     checked={radioChecked === 'increase'}
                     type="radio"
                     id='increase'
                     name="sort"
                     onChange={radioButtonChanged}
                     onClick={props.sortAscending}
                  />
                  <label htmlFor="increase"> - по возрастанию цены</label>
               </li>
               <li>
                  <input
                     checked={radioChecked === 'descending'}
                     type="radio"
                     id="descending"
                     name="sort"
                     onChange={radioButtonChanged}
                     onClick={props.sortDescending}
                  />
                  <label htmlFor="descending"> - по убыванию цене</label>
               </li>
               <li>
                  <input
                     onChange={radioButtonChanged}
                     type="radio"
                     id="time"
                     name="sort"
                     checked={radioChecked === 'time'}
                     onClick={props.travelTime}
                  />
                  <label htmlFor="time"> - по времени в пути</label>
               </li>
            </ul>
         </div>

         <div className={s.filter}>
            <h2 className={s.text}>Фильтровать</h2>
            <ul className={s.text} >
               <li>
                  <input type="checkbox" id='withTransfer'
                     name="filter" />
                  <label htmlFor="withTransfer"> - 1 пересадка</label>
               </li>
               <li>
                  <input type="checkbox" id="withoutTransfer"
                     name="filter" />
                  <label htmlFor="withoutTransfer"> - без переседок</label>
               </li>
            </ul>
         </div>

         <div className={s.price}>
            <h2 className={s.text}>Цена</h2>
            <ul className={s.text} >
               <li>
                  От <input value='0' />
               </li>
               <li>
                  До <input value='10000' />
               </li>
            </ul>
         </div>


         <div className={s.companies}>
            <h2 className={s.text}>Авиакомпании</h2>
            <ul className={s.text} >
               <li>
                  <input type="checkbox" id='airlinesPL'
                     name="filter" />
                  <label htmlFor="airlinesPL"> - LOT Polish Airlines от 21049 р.</label>
               </li>
               <li>
                  <input type="checkbox" id="airlinesRU"
                     name="filter" />
                  <label htmlFor="airlinesRU"> - Аэрофлот - рос.... от 31733 р.</label>
               </li>
            </ul>
         </div>
      </div>
   )
}
export default MainMenu;