import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../state";
import { IRootState } from "@reduxStore/state/types";

/**
 * Reducer - logics Handling and State updation
 */

export const dashboardReducer = createSlice({
  name: "dashboardInfomationReducer",
  initialState,
  reducers: {
    updateDashboardDetails: (state, action: PayloadAction<IRootState>) => {
      return state = {
        ...state,
        ...action.payload
      };
    },
    updateNotification: (state, action: PayloadAction<IRootState>) => {
      // state.loader = {
      //   ...state.loader,
      //   ...action.payload
      // };
    },
    updateProfileOpen: (state, action: PayloadAction<{
      users?: boolean;
      personalInformation?: boolean;
    }>) => {
      // state.loader = {
      //   ...state.loader,
      //   ...action.payload
      // };
    },
  },
});

export const { updateDashboardDetails, updateNotification, updateProfileOpen } =
dashboardReducer.actions;

export default dashboardReducer.reducer;
