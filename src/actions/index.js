import { FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT } from './types';
const rentals = [{
  id: '1',
  title: "Luxury Apartment",
  catergory: 'Apartment',
  city: 'Turin',
  street: 'via garibaldi 30',
  image: 'http://via.placeholder.com/350x250',
  bedroom: 3,
  description: "Feel the luxury life",
  dailyRate: 35,
  shared: false,
  createdAt: '11/10/2018'
},
{
  id: '2',
  title: "relaxing Apartment",
  city: 'Turin',
  catergory: 'Condo',
  street: 'via brescia 30',
  image: 'http://via.placeholder.com/350x250',
  bedroom: 3,
  description: "Stay with style",
  dailyRate: 35,
  shared: true,
  createdAt: '12/10/2018'
},
{
  id: '3',
  title: "Luxury Apartment 2",
  catergory: 'Room',
  city: 'Turin',
  street: 'via genoa 30',
  image: 'http://via.placeholder.com/350x250',
  bedroom: 3,
  description: "Feel the luxury",
  dailyRate: 35,
  shared: true,
  createdAt: '13/10/2018'
},
{
  id: '4',
  title: "Luxury Apartment 3",
  catergory: 'House',
  city: 'Turin',
  street: 'via genoa 30',
  image: 'http://via.placeholder.com/350x250',
  bedroom: 3,
  description: "Feel the luxury",
  dailyRate: 35,
  shared: false,
  createdAt: '13/10/2018'
}]


export const fetchRentals = () => {
  return {
    type: FETCH_RENTALS,
    rentals
  }
}

const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
}
const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  }
}

export const fetchRentalById = (rentalId) => {

  return function (dispatch) {
    dispatch(fetchRentalByIdInit())

    setTimeout(() => {
      const rental = rentals.find((rental) => rental.id === rentalId);
      dispatch(fetchRentalByIdSuccess(rental))
    }, 1000);
  }

}

