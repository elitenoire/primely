import axios from 'axios'
import { SubmissionError } from 'redux-form';

const client = axios.create({
    baseURL: '/auth'
  });

const auth = {}

// client-to-server async helpers
auth.login = async (user) => {
    try{
        const response = await client.post('/login', user)
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


// client-localStorage helpers

// Retrieve token from store
auth.getTokenFromStorage = (key = 'token') => {
    return localStorage.getItem(key) || null
}

// Check if user is authenticated
auth.isUserAuthenticated = (key) => {
    //return localStorage.getItem(key) !== null // && TOKENhaSNOT EXPIRED?
    return auth.getTokenFromStorage(key) !== null
}

// Authenticate user
auth.authenticateUser = (key, token) => {
    localStorage.setItem(key, token)
}

// deauthenticate user -> Log Out
auth.deauthenticateUser = (key) => {
    localStorage.removeItem(key)
}

export { auth }