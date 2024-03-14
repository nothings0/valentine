import axios from "axios";

type Valentine = {
  name: string;
  desc: string;
};
const URL = "http://localhost:8000/api/v1/valentines";
export const Create = async (data: Valentine) => {
  try {
    const res = await axios.post(URL, data);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const Get = async (slug: string) => {
  try {
    const res = await axios.get(`${URL}/${slug}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
