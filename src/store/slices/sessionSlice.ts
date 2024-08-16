import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSessions, deleteSession } from "../../api/sessions";
import { ISession } from "../../models/ISession";

export enum SessionStatus {
  LOADING,
  SUCCESS,
  FAILED,
}

export interface ISessionState {
  sessions: ISession[];
  status: SessionStatus;
}

const initialState: ISessionState = {
  sessions: [],
  status: SessionStatus.LOADING,
};

export const fetchSessions = createAsyncThunk("session/fetchSessions", async (): Promise<ISession[] | undefined> => {
  try {
    const response = await getSessions();
    return response?.data;
  } catch (error) {
    console.error(error);
  }
});

export const removeSession = createAsyncThunk("session/removeSession", async (id: number, { rejectWithValue }) => {
  try {
    await deleteSession(id);
    return id; // Возвращаем id удаленной сессии
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Получение сессий
      .addCase(fetchSessions.pending, state => {
        state.status = SessionStatus.LOADING;
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.status = SessionStatus.SUCCESS;
        state.sessions = action.payload || [];
      })
      .addCase(fetchSessions.rejected, state => {
        state.status = SessionStatus.FAILED;
        state.sessions = [];
      })
      // Удаление сессии
      .addCase(removeSession.pending, state => {
        state.status = SessionStatus.LOADING;
      })
      .addCase(removeSession.fulfilled, (state, action) => {
        state.status = SessionStatus.SUCCESS;
        state.sessions = state.sessions.filter(session => session.id !== action.payload);
      })
      .addCase(removeSession.rejected, state => {
        state.status = SessionStatus.FAILED;
      });
  },
});

export default sessionSlice.reducer;
