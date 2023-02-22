import axios from "axios";

const BASE_URL = "https://formspree.io/f/xknyqkgk";

const fetchMessage = (payload = {}) =>
  axios
    .post(BASE_URL, {
      payload,
    })
    .then((response) => response);

export default fetchMessage;
