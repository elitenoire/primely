import axios from 'axios'
import { auth } from './auth'
import { ACCESS_TOKEN } from '../constants'



const api =  (key = ACCESS_TOKEN ) => {
  const token = auth.getTokenFromStorage(key)
  axios.defaults.baseURL = '/api'
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  else {
    delete axios.defaults.headers.common['Authorization']
  }
  return { getStudents, getOneStudent, deleteStudent, saveStudent}
}



// Fetch a list of students from db
const getStudents = async () => {
  try{
      const response = await axios.get('/students')
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
const getOneStudent = async (id) => {
  try {
      const response = await axios.get(`/students/${id}`)
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
const deleteStudent = async (id) => {
  try{
      const response = await axios.delete(`/students/${id}`)
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
const saveStudent = async (student, method, id = '') => {
  try{// method : post || put -> create new || update old
      const response = await axios[method](`/students/${id}`, student)
      return { response }
  }
  catch(err){
    if(err.response){
      return {error : err.response.data}
      //return {error : {success : 'false' , _error : 'Something went wrong, please refresh'}}
  }
  return {error : {success : 'false' , _error : 'Something went wrong, please refresh'}}
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
