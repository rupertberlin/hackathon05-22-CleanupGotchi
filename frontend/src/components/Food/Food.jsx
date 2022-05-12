import React from "react";

export default function Food() {
  const url = axios
    .get(url)
    .then((response) => {
      setData(response.data);

      console.log("data is: ", data);
    })
    .catch((err) => console.log("erorr ", err));
  return <div></div>;
}
