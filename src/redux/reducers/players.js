import {ADD_PLAYER} from "../actionTypes";

let maxId = 4;
const playerInitialState = {
  players : [
    {id:1, name:'LDK', score: 10},
    {id:2, name:'HKY', score: 20},
    {id:3, name:'KIM', score: 30},
    {id:4, name:'HONG', score: 40}
  ]
}
export const playerReducer = (state = playerInitialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_PLAYER:
      return { //Deep Copy and return new Object by spread operator
        ...state,
        players: [...state.players, {id: ++maxId, name: action.name, score: 0}]
      };
    default:
      break;
  }
  return state;
}