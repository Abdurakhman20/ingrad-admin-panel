import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLicenseKeys, deleteLicenseKey, createLicenseKey } from "../../api/licenseKeys";
import { ILicenseKey } from "../../models/ILicenseKey";
import { deleteSession } from "../../api/sessions";

export enum LicenseStatus {
  LOADING,
  SUCCESS,
  FAILED,
}

export interface ILicenseState {
  licenses: ILicenseKey[];
  status: LicenseStatus;
}

const initialState: ILicenseState = {
  licenses: [],
  status: LicenseStatus.LOADING,
};

export const fetchLicenseKeys = createAsyncThunk("license/fetchLicenseKeys", async (): Promise<ILicenseKey[] | undefined> => {
  const response = await getLicenseKeys();
  return response?.data;
});

export const removeLicenseKey = createAsyncThunk("license/removeLicenseKey", async (id: number, { rejectWithValue }) => {
  try {
    await deleteLicenseKey(id);
    // Тут я хз связаны ли id лицензии и сессии, если да, то все правильно
    await deleteSession(id);
    return id; // Возвращаем id удаленной лицензии
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addLicenseKey = createAsyncThunk(
  "license/addLicenseKey",
  async ({ name, value }: { name: string; value: string }): Promise<ILicenseKey | undefined> => {
    const response = await createLicenseKey(name, value);
    return response?.data;
  },
);

export const licenseSlice = createSlice({
  name: "license",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Получение лицензий
      .addCase(fetchLicenseKeys.pending, state => {
        state.status = LicenseStatus.LOADING;
      })
      .addCase(fetchLicenseKeys.fulfilled, (state, action) => {
        state.status = LicenseStatus.SUCCESS;
        state.licenses = action.payload || [];
      })
      .addCase(fetchLicenseKeys.rejected, state => {
        state.status = LicenseStatus.FAILED;
        state.licenses = [];
      })
      // Удаление сессии
      .addCase(removeLicenseKey.pending, state => {
        state.status = LicenseStatus.LOADING;
      })
      .addCase(removeLicenseKey.fulfilled, (state, action) => {
        state.status = LicenseStatus.SUCCESS;
        state.licenses = state.licenses.filter(license => license.id !== action.payload);
      })
      .addCase(removeLicenseKey.rejected, state => {
        state.status = LicenseStatus.FAILED;
      })
      // Добавление новой лицензии
      .addCase(addLicenseKey.pending, state => {
        state.status = LicenseStatus.LOADING;
      })
      .addCase(addLicenseKey.fulfilled, (state, action) => {
        state.status = LicenseStatus.SUCCESS;
        if (action.payload) {
          state.licenses.push(action.payload);
        }
      })
      .addCase(addLicenseKey.rejected, state => {
        state.status = LicenseStatus.FAILED;
      });
  },
});

export default licenseSlice.reducer;
