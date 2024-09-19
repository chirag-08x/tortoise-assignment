import axios from "axios";

const URL = "https://randomuser.me/api/?inc=picture";
export const getRandomUser = async () => {
  try {
    const { data } = await axios.get(URL);
    console.log(data?.results);
    return data?.results[0]?.picture?.medium;
  } catch (error) {
    throw new Error(error);
  }
};
