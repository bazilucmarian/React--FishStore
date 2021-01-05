import createDataContext from "./createDataContext";
import sampleData from "../sample-fishes";
const fishes = sampleData;
// JSON.parse(localStorage.getItem("fishes")) ||
const fishesReducer = (state, action) => {
  console.log(state);
  let fishes;
  switch (action.type) {
    case "UPDATE_FISH":
      const { key, updatedFish } = action.payload;
      fishes = { ...state };
      // i use fishes[key] to find a specific fish and modify his state.
      fishes[key] = updatedFish;
      localStorage.setItem("fishes", JSON.stringify(fishes));
      return fishes;

    case "ADD_NEW_FISH":
      const newFish = action.payload;

      fishes = { ...state };

      // add new fish to fishes
      fishes[`fish${Date.now()}`] = newFish;

      localStorage.setItem("fishes", JSON.stringify(fishes));
      return fishes;

    case "DELETE_FISH":
      const index = action.payload;
      fishes = { ...state };
      delete fishes[index];
      localStorage.setItem("fishes", JSON.stringify(fishes));
      return fishes;

    default:
      return state;
  }
};

const updateFish = (dispatch) => (key, updatedFish) => {
  dispatch({ type: "UPDATE_FISH", payload: { key, updatedFish } });
};

const addNewFish = (dispatch) => (newFish) => {
  dispatch({ type: "ADD_NEW_FISH", payload: newFish });
};
const deleteFish = (dispatch) => (index) => {
  dispatch({ type: "DELETE_FISH", payload: index });
};

export const { Context, Provider } = createDataContext(
  fishesReducer,
  { updateFish, addNewFish, deleteFish },
  JSON.parse(localStorage.getItem("fishes")) || fishes
);
