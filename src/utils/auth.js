import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken"; //also used in Backend, can decode token
import serverUrl from "../utils/serverUrl"
const { REACT_APP_NAME, REACT_APP_BACKEND_API_HEROKU} = process.env


//add this url in front of axios calls 

//***************somehow that doesnt work - maybe we need to set up something in the backend for it?
// axios.defaults.baseURL= REACT_APP_BACKEND_API_HEROKU
//define default for token, so you dont need to request the auth every time


const setAuthHeaders= ()=>{
  const token = Cookies.get(`${REACT_APP_NAME}-auth-token`);
  // console.log({ tokenInsideUserComputer: token })
  if (token){
  //***********axios.defaults doesnt work also somehow
     axios.defaults.headers.common['Authorization']= `Bearer ${token}`
    // console.log("jsdlgfa")
    return true // will be helpful in App.js- useEffect, to see if you already logged in
  } else {
    return false
  }
}


//send credential // safe token or block user and send error
const login= async (credentials)=>{
    let authorization= false
    await axios( {
        method: 'post',
        url: `${serverUrl}/auth/login`,
        headers: { 
          'Content-Type': 'application/json',
        },
        data : credentials
      })
      .then(function (response) {
        // console.log(response);
        const token= response.headers["x-authorization-token"];
        if(token){
          //we save JWT here, but need to verify the JWT in the backend to be sure its valid as it is very easy to change in in FE
            Cookies.set(`${REACT_APP_NAME}-auth-token`, token)
            // console.log("Cookiset")
            authorization= true
        }  else {
            throw new Error(`Authentication  - failed`)}
        
      })
      .catch(function (error) {
        console.log(error);
      })
    return authorization
}
// this will just check if the token is a valid kind of token, not if it really exists in the backend
const decodeToken=()=>{
  const token= Cookies.get(`${REACT_APP_NAME}-auth-token`);
  let decodedToken;
  try{
    //decode manually or or package jwt
    if(token){
      decodedToken = jwt.decode(token)
    }
  } catch(e){
    console.log(e.message)
  } 
  return decodedToken
}
// Errors comes here
const userContext = async () => {
  setAuthHeaders()
  try {
    const { role } = decodeToken()
    const userContext = await axios.get(`${serverUrl}/${role}/me`)
    userContext.data.role = role;
    console.log("userContext", {userContext})
    return userContext
   } catch (e) { 
     console.error(e.message)
    }
 }

const logout=()=>{
  Cookies.remove(`${REACT_APP_NAME}-auth-token`)

}

export {
    axios as client,//not used in this app
    login,
    decodeToken,
    userContext,
    setAuthHeaders,
    logout

}
//named export 

