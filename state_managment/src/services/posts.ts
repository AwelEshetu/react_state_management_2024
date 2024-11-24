import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;

const getAllPosts = async (limit:number|void, order: string|void) => {
  const response = await axios.get(`${baseUrl}/posts?limit=${limit}&order=${order}`)
  return response.data
}

export default { getAllPosts }