import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.setItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

Authorization: `Bearer ${token}`;

// Now whenever my app needs to exchange data with a protected endpoint I can import this module, instead the usual " import axios from "axios" "
// - NOTE: Some API's will require me to use a different syntax, this is why I must understand the API I am working with as I am using it. \\

// Q: What happens after a user properly log in?
// - After a user properly authenticats, the server will return a JWT.
// - After I recive the JWT the application needs to save that token to its localStorage, so that the axiosAuth call I just wrote can use it for other calls that require an autherazation header.
// i.e.

const login = () => {
  axios.post("endpoint/here", userCredentials).then((res) => {
    localStorage.setItem("token", res.data.token);
    props.history.push("dashboard");
  });
};

// Q: Now what?
// - Well now I have a JWT, no I can actually use it to call to secure endpoints within a users account.
// - For example I can conduct an AJAX request to endpoint using the axiosWithAuth.js module.
// i.e
import { axiosWithAuth } from "./path/axiosAuth.js";
// etc
axiosWithAuth()
  .get("endpoint/path/here")
  .then((data) => {
    // do something with this secured data that I just accessed with my JWT
  }).catch;

// Q: If this where a live server I was calling to what would recive in my network request in my dev tools?
// - Autherazation: eyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NjYwYmQif
// - (JWT)

// Q: What is axios-retry and why would I want to use it?
// - axios-retry is a library that automatically retry's the request 3 times if there are errors or timeouts
