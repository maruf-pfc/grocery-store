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

const getCategoryList = async () => {
  let data;
  const response = await axiosClient
    .get("/categories?populate=*")
    .then((res) => {
      data = res.data;
      return data;
    });
  return response;
};

const getAllProducts = async () => {
  const response = await axiosClient.get("/products?populate=*").then((res) => {
    return res.data;
  });
  return response;
};

export default {
  getCategory,
  getSliders,
  getCategoryList,
  getAllProducts,
};
