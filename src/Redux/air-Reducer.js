import data from '../data.json'
const ASCENDING = 'ASCENDING'
const DESCENDING = 'DESCENDING'
const BYTRAVELTIME = 'BYTRAVELTIME'

const normalizeData = (data) =>
  data.result.flights.map((el) => ({
    ...el,
    flight: {
      ...el.flight,
      legs: el.flight.legs.map((leg) => {
        const durationTravel = new Date(leg.segments[leg.segments.length - 1].arrivalDate + 'z') - new Date(leg.segments[0].departureDate + 'z')
        const countHoursTravel = Math.trunc(durationTravel / 3600000)
        const countMinutesTravel = +((durationTravel / 3600000 - Math.trunc(durationTravel / 3600000)) * 60).toFixed(0)
        return {
          ...leg,
          segments: leg.segments.map(segment => ({
            ...segment,
            departureDate: segment.departureDate, // ??
            arrivalDate: segment.arrivalDate // ??
         })),
          duration: {
            durationTravel,
            countHoursTravel,
            countMinutesTravel,
          },
        }
      }),
    },
  }))

const initialised = {
  data: normalizeData(data),
}

const airReducer = (state = initialised, action) => {
  switch (action.type) {
    case ASCENDING: {
      let { data } = { ...state }
      let newData = [...data]
      newData.sort((a, b) =>
        +a.flight.price.total.amount > +b.flight.price.total.amount ? 1 : -1
      )

      return {
        ...state,
        data: newData,
      }
    }

    case DESCENDING: {
      let { data } = { ...state }
      let newData = [...data]
      newData.sort((a, b) =>
        +a.flight.price.total.amount < +b.flight.price.total.amount ? 1 : -1
      )

      return {
        ...state,
        data: newData,
      }
    }

    case BYTRAVELTIME: {
      let newState = JSON.parse(JSON.stringify(state))

      for (let key in newState.data) {
        newState.data[key].flight.totalDuration =
          newState.data[key].flight.legs[0].duration.durationTravel +
          newState.data[key].flight.legs[1].duration.durationTravel
      }

      newState.data.sort((a, b) =>
        a.flight.totalDuration < b.flight.totalDuration ? 1 : -1
      )

      return {
        ...state,
        data: newState.data,
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

export const byTravelTimeAC = () => {
  return { type: BYTRAVELTIME }
}

export default airReducer
