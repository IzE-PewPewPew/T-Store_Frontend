import axios from "axios";

export const baseURL = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const urlImage = "http://127.0.0.1:8000/product_image/";
