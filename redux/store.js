import { configureStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import reducer from "./reducers/index";


export const store = configureStore(initialState, {

  reducer: {

    cartReducer: cartReducer,
  }

})



return store;