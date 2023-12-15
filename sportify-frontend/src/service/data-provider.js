import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  getUserById,
} from "./axios-api";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
  USER_MAIN_DATA,
} from "../constant/data";

import { UserData } from "../models/userData";
import { UserPerformance } from "../models/userPerformance";

const mockedData = false;
const userIdAPI = 18;
const userIdMocked = 0;

export const userData = await fetchUserData();
export const activity = await fetchActivity();
export const averageSessions = await fetchAverageSessions();
export const userPerformance = await fetchUserPerformance();

async function fetchUserData() {
  let data = [];
  if (mockedData) data = USER_MAIN_DATA[userIdMocked];
  const response = await getUserById(userIdAPI);
  data = response?.data || USER_MAIN_DATA[userIdMocked];
  return new UserData(data).data;
}

async function fetchActivity() {
  if (mockedData) return USER_ACTIVITY[userIdMocked].sessions;
  const response = await getUserActivity(userIdAPI);
  return response?.data?.sessions || USER_ACTIVITY[userIdMocked].sessions;
}

async function fetchAverageSessions() {
  if (mockedData) return USER_AVERAGE_SESSIONS[userIdMocked].sessions;
  const response = await getUserAverageSessions(userIdAPI);
  return (
    response?.data?.sessions || USER_AVERAGE_SESSIONS[userIdMocked].sessions
  );
}

async function fetchUserPerformance() {
  let data = [];
  if (mockedData) data = USER_PERFORMANCE[userIdMocked];
  const response = await getUserPerformance(userIdAPI);
  data = response?.data || USER_PERFORMANCE[userIdMocked];
  return new UserPerformance(data).data;
}
