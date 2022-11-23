import { ADD_ITEM } from './actions';
import { CHANGE_ITEMS } from './actions';
import { IS_LOADING } from './actions';
import { DELETE_ITEM } from './actions';

const initialState = {
  myTodoLists: [
    {
      id:0,
      title:'reading',
      description:'Read book',
      status:'open',
      creation_date: Date(Date.now()),
      update_date: Date(Date.now())
    },

    {
      id:1,
      title:'shoping',
      description:'Buy dress',
      status:'in progress',
      creation_date: Date(Date.now()),
      update_date: Date(Date.now())
    },

    {
      id:2,
      title:'skating',
      description:'Just skate!',
      status:'in progress',
      creation_date: Date(Date.now()),
      update_date: Date(Date.now())
    }
  ],
  loading: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        myTodoLists: [...state.myTodoLists, action.payload],
      }
    case CHANGE_ITEMS:
      return {
      ...state,
      myTodoLists: action.payload
      }
    case DELETE_ITEM:
      return {
      ...state,
      myTodoLists: state.myTodoLists.filter((item)=>!action.payload.includes(item.id))
           }
    case IS_LOADING:
      return {
      ...state,
      loading: action.payload
      }

    default:
      return state;
  }

}