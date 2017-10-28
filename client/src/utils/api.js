import axios from 'axios'
import { auth } from './auth'


//const client = axios.create({baseURL: '/api' });

const api = {}

api.setAuthConfig = (token) => {
  const config = {baseURL: '/api' }
  if(token) config.headers = {common :{ Authorization : `Bearer ${token}`}}
  return config
}

const client = axios.create(api.setAuthConfig(auth.getTokenFromStorage('accessToken')));


export { api }