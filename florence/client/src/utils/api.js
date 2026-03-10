import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const submitContact = async (data) => {
    const response = await api.post('/contact', data);
    return response.data;
};

export const submitMembership = async (data) => {
    const response = await api.post('/membership', data);
    return response.data;
};

export default api;
