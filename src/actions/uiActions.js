import { UPDATE_MENUTAB_INDEX, GET_ORDER, GET_ERRORS } from "./types";

// GET
// Latest orders in the market
export const updateMenuTabIndex = (menuIndex) => async (dispatch) => {
  let storedValue = localStorage.getItem("tab", menuIndex);
  console.log(menuIndex);
  console.log(storedValue);
  if (storedValue != "null") {
    console.log("running that");

    localStorage.setItem("tab", menuIndex);
  } else {
    console.log("running this");
    localStorage.setItem("tab", 0);
  }

  dispatch({
    type: UPDATE_MENUTAB_INDEX,
    payload: menuIndex,
  });
};
