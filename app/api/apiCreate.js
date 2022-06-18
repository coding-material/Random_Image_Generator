import { create } from 'apisauce';

const apiCreate = create({
  baseURL: 'https://api.unsplash.com',
});

export default apiCreate;
