import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define the Doctor type
interface Doctor {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
}

interface DoctorsState {
  byId: Record<number, Doctor>;
  allIds: number[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state for doctors
const initialState: DoctorsState = {
  byId: {},
  allIds: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch doctors from the API
export const fetchDoctors = createAsyncThunk(
  'doctors/fetchAll',
  async () => {
    const response = await fetch('/api/doctors');
    return response.json();
  }
);

// Doctors slice
const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    // Optionally, you can add sync actions for adding/updating doctors here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        action.payload.forEach((doctor: Doctor) => {
          state.byId[doctor.id] = doctor;
          if (!state.allIds.includes(doctor.id)) {
            state.allIds.push(doctor.id);
          }
        });
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch doctors';
      });
  }
});

export const selectAllDoctors = (state: RootState) =>
  state.doctors.allIds.map(id => state.doctors.byId[id]);

export default doctorsSlice.reducer;
