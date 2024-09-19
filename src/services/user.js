import axios from "axios";

const URL = "https://randomuser.me/api/?inc=picture";
export const getRandomUser = async () => {
  try {
    const { data } = await axios.get(URL);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
