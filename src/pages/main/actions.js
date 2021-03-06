import { ActionTypes as types } from './constants'
import client from 'client'
import { store } from 'store'
import { API } from 'routes'
import { toast } from 'react-toastify'

const reduceData = data => {
  return data.reduce(
    (acc, curr) => {
      acc.data[curr.url] = curr
      return { ...acc }
    },
    { data: {} }
  )
}

export const fetchPeople = () => dispatch => {
  dispatch({
    type: types.FETCH_PEOPLE
  })

  client.get(`${API.PEOPLE}`)
    .then(response => {
      dispatch({
        type: types.FETCH_PEOPLE_SUCCESS,
        payload: response.data
      })
      store.dispatch(fetchMorePeople())
    })
    .catch(e => {
      toast.error('Ooops! Não foi possível carregar os personagens.')
      dispatch({
        type: types.FETCH_PEOPLE_FAIL
      })
    })
}

export const fetchMorePeople = () => (dispatch, getState) => {
  const { nextPage } = getState().main

  dispatch({
    type: types.FETCH_MORE_PEOPLE
  })

  client.get(`${API.PEOPLE}?page=${nextPage}`)
    .then(response => {
      dispatch({
        type: types.FETCH_MORE_PEOPLE_SUCCESS,
        payload: response.data
      })
    })
    .catch(() => {
      toast.error('Ooops! Não foi possível carregar outros personagens.')
      dispatch({
        type: types.FETCH_MORE_PEOPLE_FAIL
      })
    })
}

export const fetchStarships = page => dispatch => {
  client.get(`${API.STARSHIPS}?page=${page}`)
    .then(response => {
      const { count, next, previous, results } = response.data
      dispatch({
        type: types.FETCH_STARSHIPS_SUCCESS,
        payload: { count, next, previous, data: reduceData(results).data }
      })

      next && store.dispatch(fetchStarships(next.match(/\d+/g).join('')))
    })
    .catch(() =>
      toast.error('Ooops! Não foi possível carregar algumas starships.')
    )
}

export const fetchPlanet = id => dispatch => {
  client.get(`${API.PLANETS}${id}`)
    .then(response => {
      dispatch({
        type: types.FETCH_PLANET_SUCCESS,
        payload: response.data.name
      })
    })
}

export const resetPlanet = () => dispatch => {
  dispatch({
    type: types.RESET_PLANET
  })
}
