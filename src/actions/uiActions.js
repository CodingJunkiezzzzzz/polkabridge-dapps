import { UPDATE_MENUTAB_INDEX, GET_ORDER, GET_ERRORS } from "./types";

// GET
// Latest orders in the market
export const updateMenuTabIndex = (menuIndex) => async (dispatch) => {
  dispatch({
    type: UPDATE_MENUTAB_INDEX,
    payload: menuIndex,
  });
};
