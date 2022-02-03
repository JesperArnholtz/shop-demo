import { ShopActionTypes } from './shoptypes'
// import SHOP_DATA from './shop.data.js';
// kommer nu fra databasen

const INITIAL_STATE = {
  collections:  null
};

const shopReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
        default:
            return state;
    } 
};

export default shopReducer;