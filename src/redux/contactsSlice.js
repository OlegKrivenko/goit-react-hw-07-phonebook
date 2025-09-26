import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contactsArray: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsArray = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsArray.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contactsArray.findIndex(
          contact => contact.id === action.payload
        );
        state.contactsArray.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.contactsArray.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return { payload: { name, number, id: nanoid() } };
//       },
//     },
//     deleteContact: (state, action) => {
//       const index = state.contactsArray.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.contactsArray.splice(index, 1);
//     },
//   },
// });
// export const { addContact, deleteContact } = contactsSlice.actions;
