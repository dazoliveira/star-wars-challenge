import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface JediVsDarkseidState {
  data: string | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: JediVsDarkseidState = {
  data: null,
  status: 'idle',
};

export const jediVsDarkseidSlice = createSlice({
  name: 'jediVsDarkseid',
  initialState,
  reducers: {
    fetchYourPath: (state) => {
      state.status = 'loading';
    },
    fetchYourPathSuccess: (state, action: PayloadAction<string>) => {
      state.status = 'idle';
      state.data = action.payload;
    },
  },
});

export const { fetchYourPath, fetchYourPathSuccess } = jediVsDarkseidSlice.actions;

export const selectFetchStatus = (state: RootState) => state.jediVsDarkseid.status;
export const selectFetchData = (state: RootState) => state.jediVsDarkseid.data;


export default jediVsDarkseidSlice.reducer;
