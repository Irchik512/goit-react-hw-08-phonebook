import { contactsReduser } from 'redux/contacts/contactsSlice';
import { filterReduser } from 'redux/filter/filterSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReduser from './auth/authSlise';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
  auth: authReduser
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
