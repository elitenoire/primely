import axios from 'axios'
import { auth } from './auth'
import { ACCESS_TOKEN } from '../constants'


//const client = axios.create({baseURL: '/api' });

const api = {}
// Configure axios header with token if any
api.setAuthConfig = (token) => {
  const config = {baseURL: '/api' }
  if(token) config.headers = {common :{ Authorization : `Bearer ${token}`}}
  return config
}

// Create axios client with token in header
const client = axios.create(api.setAuthConfig(auth.getTokenFromStorage(ACCESS_TOKEN)));

// Fetch a list of students from db
api.getStudents = async () => {
  try{
      const response = await client.get('/students')
      return { response }
  }
  catch(err){
    if(err.response){
      return {error : err.response.data}
    }
    return {error : err}
  }
}

// Fetch only one student by id
api.getOneStudent = async (id) => {
  try {
      const response = await client.get(`/students/${id}`)
      return { response }
  }
  catch(err){
    if(err.response){
      return {error : err.response.data}
    }
    return {error : err}
  }
}

// Send request to delete student record in db
api.deleteStudent = async (id) => {
  try{
      const response = await client.delete(`/students/${id}`)
      return { response }
  }
  catch(err){
    if(err.response){
      return {error : err.response.data}
    }
    return {error : err.message}
  }
}

// Send request to create new / update old student record
api.saveStudent = async (student, method, id = '') => {
  try{// method : post || put -> create new || update old
      const response = await client[method](`/students/${id}`, student)
      return { response }
  }
  catch(err){
      return {error : err.message}
  }
}



export { api }

// Support cancel logic
// import axios, { CancelToken } from 'axios'
// import { CANCEL } from 'redux-saga'

// export default function fetchAPI(url) {
//   const source = CancelToken.source()
//   const request = axios.get(url, { cancelToken: source.token })
//   request[CANCEL] = () => source.cancel()
//   return request
// }
