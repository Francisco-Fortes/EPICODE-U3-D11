export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavouriteAction = (payloadData) => {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: payloadData,
  };
};

export const removeFromFavouriteAction = (payloadData) => {
  return {
    type: "REMOVE_FROM_FAVOURITE",
    payload: payloadData,
  };
};
