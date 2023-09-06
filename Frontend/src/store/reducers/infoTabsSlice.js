import { createSlice } from "@reduxjs/toolkit";

const infoTabsSlice = createSlice({
  name: "tabItems",
  initialState: {
    activeTab: "Description",
    tabList: [
      {
        tabname: "Description",
        tabProps: ["Brand", "Color", "Delivery", "Feedback"],
      },
      {
        tabname: "Characteristics",
        tabProps: [
          "Assignment",
          "Basis",
          "GlossGrade",
          "Type",
          "Type of work",
          "Weight",
        ],
      },
      {
        tabname: "Delivery",
        tabProps: ["Delivery type"],
      },
      {
        tabname: "Feedback",
        tabProps: ["Feedback"],
      },
    ],
  },
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export default infoTabsSlice.reducer;
export const { setActiveTab } = infoTabsSlice.actions;
