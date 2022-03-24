import data from '../data.json';
const ASCENDING = "ASCENDING";
const DESCENDING = "DESCENDING";
const SETDATA = "SETDATA";
const BYTRAVELTIME = "BYTRAVELTIME";

const initialised = {
   data: data.result.flights,
}


const airReducer = (state = initialised, action) => {

   switch (action.type) {
      case ASCENDING: {

         let { data } = { ...state }
         let newData = [...data]
         newData.sort((a, b) => +a.flight.price.total.amount > +b.flight.price.total.amount ? 1 : -1)

         return {
            ...state,
            data: newData,
         }
      }

      case DESCENDING: {

         let { data } = { ...state }
         let newData = [...data]
         newData.sort((a, b) => +a.flight.price.total.amount < + b.flight.price.total.amount ? 1 : -1)

         return {
            ...state,
            data: newData,
         }
      }

      case BYTRAVELTIME: {

         let newState = JSON.parse(JSON.stringify(state))

         for (let key in newState.data) {
            newState.data[key].flight.totalDuration = newState.data[key].flight.legs[0].duration.durationTravel + newState.data[key].flight.legs[1].duration.durationTravel
         }

         newState.data.sort((a, b) => a.flight.totalDuration < b.flight.totalDuration ? 1 : -1)

         return {
            ...state,
            data: newState.data,
         }
      }

      case SETDATA: {
         if ((typeof action.data[0].flight.legs[0].duration.durationTravel) === 'undefined') {

            //глубокое копирование
            let newStateOneCopy = JSON.parse(JSON.stringify(action.data));

            /* --------------------------------------------------------------- */

            //Перевод данных из ISO в миллисекунды
            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[0].segments[0].departureDate;
               i = +new Date(i + 'z')
               u.flight.legs[0].segments[0].departureDate = i
            })
            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[0].segments[1].departureDate;
               i = +new Date(i + 'z')
               u.flight.legs[0].segments[1].departureDate = i
            })
            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[1].segments[0].departureDate;
               i = +new Date(i + 'z')
               u.flight.legs[1].segments[0].departureDate = i
            })
            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[1].segments[1].departureDate;
               i = +new Date(i + 'z')
               u.flight.legs[1].segments[1].departureDate = i
            })
            /* ----------------- */
            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[0].segments[0].arrivalDate;
               i = +new Date(i + 'z')
               u.flight.legs[0].segments[0].arrivalDate = i
            })
            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[0].segments[1].arrivalDate;
               i = +new Date(i + 'z')
               u.flight.legs[0].segments[1].arrivalDate = i
            })

            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[1].segments[0].arrivalDate;

               i = +new Date(i + 'z')
               u.flight.legs[1].segments[0].arrivalDate = i
            })
            newStateOneCopy.forEach(u => {
               let i = u.flight.legs[1].segments[1].arrivalDate;
               i = +new Date(i + 'z')
               u.flight.legs[1].segments[1].arrivalDate = i
            })
            /* --------------------------------------------------------------- */
            //Данный список из console.log нужен для того, чтобы было понятнее работать с данными

            /* console.log('departureDate')
            console.log(newStateOneCopy[0].flight.legs[0].segments[0].departureDate)
            console.log(newStateOneCopy[0].flight.legs[0].segments[1].departureDate)
            console.log('-----------------------')

            console.log('arrivalDate')
            console.log(newStateOneCopy[0].flight.legs[0].segments[0].arrivalDate)
            console.log(newStateOneCopy[0].flight.legs[0].segments[1].arrivalDate)
            console.log('-----------------------')

            console.log('-----------------------')
            console.log('departureDate')
            console.log(newStateOneCopy[0].flight.legs[1].segments[0].departureDate)
            console.log(newStateOneCopy[0].flight.legs[1].segments[1].departureDate)
            console.log('-----------------------')

            console.log('arrivalDate')
            console.log(newStateOneCopy[0].flight.legs[1].segments[0].arrivalDate)
            console.log(newStateOneCopy[0].flight.legs[1].segments[1].arrivalDate) */

            //Вычисление времени в пути: вычетаем дату прибытия от отбытия
            let value1 = newStateOneCopy.map(u => (u.flight.legs[0].segments[1].arrivalDate - u.flight.legs[0].segments[0].departureDate))

            let value2 = newStateOneCopy.map(u => (u.flight.legs[1].segments[1].arrivalDate - u.flight.legs[1].segments[0].departureDate))

            let newState = JSON.parse(JSON.stringify(action.data));

            //Создание объекта duration, в который помещаются данные о времени пути в миллисекундах
            for (let key in newState) {
               newState[key].flight.legs[0].duration = {}
               newState[key].flight.legs[0].duration.durationTravel = value1[key]
            }
            for (let key in newState) {
               newState[key].flight.legs[1].duration = {}
               newState[key].flight.legs[1].duration.durationTravel = value2[key]
            }

            //Вычисление часов в пути: создаём countHoursTravel и переводим миллисекунд в часы
            for (let key in newState) {
               newState[key].flight.legs[0].duration.countHoursTravel = newState[key].flight.legs[0].duration.durationTravel / 3600000
            }
            for (let key in newState) {
               newState[key].flight.legs[1].duration.countHoursTravel = newState[key].flight.legs[1].duration.durationTravel / 3600000
            }

            //Вычисление минут в пути
            for (let key in newState) {
               let result = newState[key].flight.legs[0].duration.countHoursTravel;
               newState[key].flight.legs[0].duration.countMinutesTravel = +((result - Math.trunc(result)) * 60).toFixed(0)
            }
            for (let key in newState) {
               let result = newState[key].flight.legs[1].duration.countHoursTravel;
               newState[key].flight.legs[1].duration.countMinutesTravel = +((result - Math.trunc(result)) * 60).toFixed(0)
            }

            //Вычисление часов в пути: убираем значения после точки
            for (let key in newState) {
               newState[key].flight.legs[0].duration.countHoursTravel = Math.trunc(newState[key].flight.legs[0].duration.durationTravel / 3600000)
            }
            for (let key in newState) {
               newState[key].flight.legs[1].duration.countHoursTravel = Math.trunc(newState[key].flight.legs[1].duration.durationTravel / 3600000)
            }
            return {
               ...state,
               data: newState,
            }
         }

      }

      default:
         return state
   }
}

export const sortAscendingActionCreator = (data) => {
   return { type: ASCENDING, data }
}

export const sortDescendingActionCreator = () => {
   return { type: DESCENDING }
}

export const setDataActionCreator = (data) => {
   return { type: SETDATA, data }
}

export const byTravelTimeAC = () => {
   return { type: BYTRAVELTIME }
}

export default airReducer;