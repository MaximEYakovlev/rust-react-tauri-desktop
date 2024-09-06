import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Procedure {
  id: number;
  name: string;
}

interface ProceduresState {
  byId: Record<number, Procedure>;
  allIds: number[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProceduresState = {
  byId: {},
  allIds: [],
  status: 'idle',
  error: null,
};

export const fetchProcedures = createAsyncThunk(
  'procedures/fetchAll',
  async () => {
    const response = await fetch('/api/procedures');
    return response.json();
  }
);

const proceduresSlice = createSlice({
  name: 'procedures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProcedures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProcedures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        action.payload.forEach((procedure: Procedure) => {
          state.byId[procedure.id] = procedure;
          if (!state.allIds.includes(procedure.id)) {
            state.allIds.push(procedure.id);
          }
        });
      })
      .addCase(fetchProcedures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch procedures';
      });
  }
});

export const selectAllProcedures = (state: RootState) =>
  state.procedures.allIds.map(id => state.procedures.byId[id]);

export default proceduresSlice.reducer;
