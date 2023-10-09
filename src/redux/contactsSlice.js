import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};
const customArray = [fetchContacts, addContact, deleteContact];
const fn = status => customArray.map(el => el[status]);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: bilder =>
    bilder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected),
});

export const contactsReducer = contactsSlice.reducer;

// const handlePending = state => {
//   state.contacts.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: bilder =>
//     bilder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)

//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)

//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         const index = state.contacts.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.contacts.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, handleRejected),
// });
////////////////////////////////////////////////////////////////////////////
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: bilder =>
//     bilder
//       .addCase(fetchContacts.pending, state => {
//         state.contacts.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })
//       .addCase(addContact.pending, state => {
//         state.contacts.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       })
//       .addCase(deleteContact.pending, state => {
//         state.contacts.isLoading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         const index = state.contacts.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.contacts.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = action.payload;
//       }),
// });
//
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },

//     [addContact.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items.push(action.payload);
//     },
//     [addContact.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },

//     [deleteContact.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       console.log(action.payload);

//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       const index = state.contacts.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.contacts.items.splice(index, 1);
//     },
//     [deleteContact.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//       console.log(action.payload);
//     },
//   },
// });
