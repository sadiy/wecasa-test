import { AppDispatch } from "../store";
import { setError, setUniverse } from "../slices/universe";

const API_URL = "https://www.wecasa.fr/api/techtest/universe";

export function fetchUniverse() {
  return async (dispatch: AppDispatch) => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(
          `An error occurred while trying to get universe data with status: ${response.status}`
        );
      })
      .then((data) => {
        dispatch(setUniverse(data));
      })
      .catch((error: Error) => {
        dispatch(setError(error.message));
      });
  };
}
