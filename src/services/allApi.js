import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const signUpApi = async (reqBody) => {
    console.log("inside signup api");
    return await commonApi('POST', `${serverUrl}/signup`, reqBody)
}

export const signInApi = async (reqBody) => {
    console.log("Inside sign in api")
    return await commonApi('POST', `${serverUrl}/signin`, reqBody)
}

export const createTaskApi = async (reqBody, reqHeader) => {
    console.log("Inside create task api");
    return await commonApi('POST', `${serverUrl}/createtask`, reqBody, reqHeader)
}

export const getUserTasksApi = async (reqHeader) => {
    console.log("Inside get user tasks API")
    // console.log(reqHeader)
    return await commonApi('GET', `${serverUrl}/gettasks`, {}, reqHeader)
}

export const viewTaskDetailsApi = async (taskId, reqHeader) => {
    return await commonApi('GET', `${serverUrl}/viewtask/${taskId}`, {}, reqHeader)
}

export const editTaskApi = async (taskId, reqBody, reqHeader) => {
    return await commonApi('PUT', `${serverUrl}/edittask/${taskId}`, reqBody, reqHeader)
}