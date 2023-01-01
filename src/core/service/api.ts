//Spaceflight News API - All Articles

import { API_URL } from "../constants/api";


export const getArticles = async () => {
    const response = await fetch(`${API_URL}/articles`);
    const data = await response.json();
    return data;
};


//Spaceflight News API - Article by ID
export const getArticleById = async (id: string) => {
    const response = await fetch(`${API_URL}/articles/${id}`);
    const data = await response.json();
    return data;
}

