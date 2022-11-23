export const ADD_ITEM = '@items/ADD_ITEM'
export const CHANGE_ITEMS = '@items/CHANGE_ITEMS'
export const IS_LOADING = '@items/IS_LOADING'
export const DELETE_ITEM = '@items/DELETE_ITEM'

export const addItemToState = (item) => {
  return {
    type: ADD_ITEM,
    payload: {
      ...item,
    },
  }
}

export const changeItems = (item) => {
  return {
    type: CHANGE_ITEMS,
    payload: item,
  }
}

export const deleteItem = (deletedItems) => {
  return {
    type: DELETE_ITEM,
    payload: deletedItems,
  }
}

  export const isLoading = (item) => {
    return {
      type: IS_LOADING,
      payload: item,
    }
}