import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "367c2f4302884f0dbb7e8e0cb7a35b8a",
  },
});
