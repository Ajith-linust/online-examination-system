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
      return (state = {
        ...state,
        ...action.payload,
      });
    },
  },
});

export const { updateDashboardDetails } = dashboardReducer.actions;

export default dashboardReducer.reducer;
