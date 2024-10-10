import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/';
export const getArticles = async () => {
 return axios.get(API_URL+'/posts');
};
export const getArticlesById = async (articleId) => {
    return axios.get(`${API_URL}/posts/${articleId}`);
   };
export const createArticle = async (articleData) => {
 return axios.post(API_URL+'/posts', articleData);
};
export const updateArticle = async (articleId, articleData) => {
 return axios.put(`${API_URL}/posts/${articleId}`, articleData);
};