import { configureStore } from '@reduxjs/toolkit'
import universeReducer from "./slices/universe";
import shoppingBasketReducer from './slices/shoppingBasket';
import { fetchUniverse } from './actions/universe';

const store = configureStore({
  reducer: {
    universe: universeReducer,
    shoppingBasket: shoppingBasketReducer
  }
});

store.dispatch(fetchUniverse());

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch