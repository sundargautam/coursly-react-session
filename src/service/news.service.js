import axios from "axios";
export const getHealthNews = () => {
  return axios.get(
    `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
  );
};

export const getPopularNews = () => {
  return axios.get(`https://dsaurav.tech/NewsAPI/everything/cnn.json`);
};
