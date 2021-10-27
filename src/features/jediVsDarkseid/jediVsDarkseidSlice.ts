import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface JediVsDarkseidState {
  masterName: string | null;
  yourPath: string | null;
  status: 'idle' | 'loading' | 'failed';
}


export interface IJediVsDarseidPayload {
  masterName: string | null;
  yourPath: string | null;
}

const initialState: JediVsDarkseidState = {
  masterName: null,
  yourPath: null,
  status: 'idle',
};

export const jediVsDarkseidSlice = createSlice({
  name: 'jediVsDarkseid',
  initialState,
  reducers: {
    fetchYourPath: (state) => {
      state.status = 'loading';
    },
    fetchYourPathSuccess: (state, action: PayloadAction<IJediVsDarseidPayload>) => {
      state.status = 'idle';
      state.masterName = action.payload.masterName;
      state.yourPath = action.payload.yourPath
    },
  },
});

export const { fetchYourPath, fetchYourPathSuccess } = jediVsDarkseidSlice.actions;

export const selectFetchStatus = (state: RootState) => state.jediVsDarkseid.status;
export const selectMasterName = (state: RootState) => state.jediVsDarkseid.masterName;
export const selectYourPath = (state: RootState) => state.jediVsDarkseid.yourPath;



export default jediVsDarkseidSlice.reducer;
