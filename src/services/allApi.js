import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const signUpApi = async(reqBody) => {
    console.log("inside signup api");
    
    return await commonApi('POST', `${serverUrl}/signup`, reqBody)
}

export const signInApi = async(reqBody) => {
    console.log("Inside sign in api")
    return await commonApi('POST', `${serverUrl}/signin`, reqBody)
}