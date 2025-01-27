import axios from 'axios';

export const fetchArticles = async () => {
  const response = await axios.get('http://hn.algolia.com/api/v1/search?query=react');
  return response.data;
};
export const fetchArticlesById = async () => {
  const response = await axios.get('http://hn.algolia.com/api/v1/search?query=react');
  return response.data;
};
