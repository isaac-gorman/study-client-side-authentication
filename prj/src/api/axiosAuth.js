import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.setItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

Authorization: `Bearer ${token}`,

// Now whenever my app needs to exchange data with a protected endpoint I can import this module, instead the usual " import axios from "axios" "
// - NOTE: Some API's will require me to use a different syntax, this is why I must understand the API I am working with as I am using it. 

