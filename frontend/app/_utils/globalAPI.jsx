const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategory = async () => {
  const response = await axiosClient.get("/categories?populate=*");
  return response.data;
};

const getSliders = async () => {
  const response = await axiosClient.get("/sliders?populate=*").then((res) => {
    return res.data;
  });
  return response.data;
};

export default {
  getCategory,
  getSliders,
};
