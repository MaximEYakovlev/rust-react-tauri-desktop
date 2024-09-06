import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define the Doctor type
interface Doctor {
  id: number;
  name: string;
  surname: string;
  birthdate: string;
}

/* status: 'idle' | 'loading' | 'succeeded' | 'failed' */

/* pattern is used to represent the different states of an asynchronous operation,
such as fetching data from an API.
This is a common practice in Redux to help manage UI behavior based on the current status of the request.
Here's a breakdown of the four statuses: */

/* idle: This is the initial state before any asynchronous action is triggered. It indicates that nothing is happening yet. */

/* loading: When an asynchronous operation (like an API request) is triggered (e.g.,
fetching doctors or patients), the status is set to loading.
This can be used to show a loading spinner or a message like "Loading data...". */

/* succeeded: Once the API request has successfully returned data, the status changes to succeeded.
This is where the UI can show the actual data that was fetched. */

/* failed: If the API request fails (e.g., network error, server error), the status changes to failed,
and you can display an error message in the UI. */

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
