import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    setModal(state, action) {
      state.showModal = action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
