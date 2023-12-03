import axios from "axios";

const failureResponse = {
  message: "Failure: unable to call api",
  data: null,
};

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export async function getUserById(id) {
  try {
    const response = await instance.get("/user/" + id);
    return response.data;
  } catch (error) {
    return failureResponse;
  }
}

export async function getUserActivity(id) {
  try {
    const response = await instance.get("/user/" + id + "/activity");
    return response.data;
  } catch (error) {
    return failureResponse;
  }
}

export async function getUserAverageSessions(id) {
  try {
    const response = await instance.get("/user/" + id + "/average-sessions");
    return response.data;
  } catch (error) {
    return failureResponse;
  }
}

export async function getUserPerformance(id) {
  try {
    const response = await instance.get("/user/" + id + "/performance");
    return response.data;
  } catch (error) {
    return failureResponse;
  }
}
