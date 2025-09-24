import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contactsArray: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsArray.push(action.payload);

        // return [...state.contactsArray, action.payload];
      },
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
    },
    deleteContact: (state, action) => {
      const index = state.contactsArray.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsArray.splice(index, 1);

      // return state.contactsArray.filter(
      //   contact => contact.id !== action.payload
      // );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
