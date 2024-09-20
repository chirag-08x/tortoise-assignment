import axios from "axios";

export const getRandomUser = async (limit) => {
  const URL = `https://randomuser.me/api/?inc=picture&results=${limit}`;
  try {
    const { data } = await axios.get(URL);
    console.log(data?.results);
    return data?.results;
  } catch (error) {
    throw new Error(error);
  }
};
