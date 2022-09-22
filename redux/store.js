import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import rootReducer from './reducers/index';


const store = configureStore({

  reducer: {

    cartReducer: cartReducer,
    rootReducer: rootReducer

  }

})

export default store 


