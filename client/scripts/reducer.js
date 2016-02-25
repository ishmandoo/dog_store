import { createStore } from 'redux';

function dogs(state = [], action) {
  switch (action.type) {
  case 'ADD_DOG':

    return state + [{name:name, description: description}]
  case 'REMOVE_DOG':
    return state - 1
  default:
    return state
  }
}

let store = createStore(dogs)
