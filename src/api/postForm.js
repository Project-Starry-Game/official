import axios from "axios";

export function postForm(url, formData) {
  axios
    .post(url, formData)
    .then(function () {})
    .catch((error) => {
      console.log(error);
    });
}
