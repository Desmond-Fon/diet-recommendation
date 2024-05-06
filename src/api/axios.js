import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const axiosWithoutToken = () =>
  axios.create({
    baseURL: 'https://tolusrec.pythonanywhere.com/',
    headers: {
      "Content-Type": "application/json",
    },
  });

export const axiosWithToken = (token) =>
  axios.create({
    baseURL: 'https://tolusrec.pythonanywhere.com/',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${JSON.parse(token)}`,
    },
  });
