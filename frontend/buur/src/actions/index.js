import fetch from "isomorphic-fetch";
import { USER_SIGN_UP_RESULT } from "./action-types";
import { ADD_BASKET } from "./action-types";

// user
export const userSignUp = (signUpInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3002/users/signUp", {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(signUpInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          dispatch(userSignUpResult(true));
        }
      })
      .catch((error) => dispatch(userSignUpResult(error)));
  };
};

export const userSignUpResult = (result) => {
  return {
    type: USER_SIGN_UP_RESULT,
    result,
  };
};


// basket
export const addBasket = basket => ({ 
  type: ADD_BASKET,
  payload: basket
});