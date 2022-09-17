import { AppDispatch } from "../store";
import { setError, setUniverse } from "../slices/universe";

const API_URL = "https://www.wecasa.fr/api/techtest/universe";

export function fetchUniverse() {
    return async (dispatch: AppDispatch) => {
      fetch(API_URL)
        .then(response => {
            if(response.ok) {
                return response.json();
            }

            setError("Erreur lors de la récupération de l'universe");
        })
        .then((data) => {
          dispatch(setUniverse(data));
        });
    };
}