import axios from "axios";

const failureResponse = {
  status: "ERROR",
  statusText: "ERROR: unable to call api",
  data: null,
};

/**
 * UserService
 * @extends {Service|MockedService}
 */
const instance = axios.create({
  baseURL: "http://localhost:4000",
});

/**
 * call to getUserData()
 * @param {number} userId id of the user
 * @returns user datas
 */
export async function getUserById(id) {
  try {
    const response = await instance.get("/user/" + id);
    return response;
  } catch (error) {
    return failureResponse;
  }
}

/**
 * call to getUserActivity()
 * @param {number} userId  id of the user
 * @returns user activities datas
 */
export async function getUserActivity(id) {
  try {
    const response = await instance.get("/user/" + id + "/activity");
    return response;
  } catch (error) {
    return failureResponse;
  }
}

/**
 * call to getUserAverageSessions()
 * @param {number} userId id of the user
 * @returns user average sessions datas
 */
export async function getUserAverageSessions(id) {
  try {
    const response = await instance.get("/user/" + id + "/average-sessions");
    return response;
  } catch (error) {
    return failureResponse;
  }
}

/**
 * call to getUserPerformance()
 * @param {number} userId id of the user
 * @returns user performances datas
 */
export async function getUserPerformance(id) {
  try {
    const response = await instance.get("/user/" + id + "/performance");
    return response;
  } catch (error) {
    return failureResponse;
  }
}
