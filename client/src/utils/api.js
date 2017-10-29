import axios from 'axios'
import { auth } from './auth'
import { ACCESS_TOKEN } from '../constants'


//const client = axios.create({baseURL: '/api' });

const api = {}

api.setAuthConfig = (token) => {
  const config = {baseURL: '/api' }
  if(token) config.headers = {common :{ Authorization : `Bearer ${token}`}}
  return config
}

const client = axios.create(api.setAuthConfig(auth.getTokenFromStorage(ACCESS_TOKEN)));


export { api }