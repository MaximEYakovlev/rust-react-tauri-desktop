import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Patient {
  id: number;
  firstname: string;
  surname: string;
  birthdate: string;
  doctorId: number;
}

interface PatientsState {
  byId: Record<number, Patient>;
  allIds: number[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PatientsState = {
  byId: {},
  allIds: [],
  status: 'idle',
  error: null,
};

export const fetchPatients = createAsyncThunk(
  'patients/fetchAll',
  async (doctorId: number) => {
    const response = await fetch(`/api/patients?doctorId=${doctorId}`);
    return response.json();
  }
);

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        action.payload.forEach((patient: Patient) => {
          state.byId[patient.id] = patient;
          if (!state.allIds.includes(patient.id)) {
            state.allIds.push(patient.id);
          }
        });
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch patients';
      });
  }
});

export const selectPatientsByDoctor = (state: RootState, doctorId: number) =>
  state.patients.allIds
    .map(id => state.patients.byId[id])
    .filter(patient => patient.doctorId === doctorId);

export default patientsSlice.reducer;
