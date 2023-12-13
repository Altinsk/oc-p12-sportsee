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

const mockedData = false;
const userIdAPI = 12;
const userIdMocked = 0;

export const userData = await fetchUserData();
export const activity = await fetchActivity();
export const averageSessions = await fetchAverageSessions();
export const userPerformance = await fetchUserPerformance();

async function fetchUserData() {
  if (mockedData) return USER_MAIN_DATA[userIdMocked];
  const response = await getUserById(userIdAPI);
  return response?.data || USER_MAIN_DATA[userIdMocked];
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
  if (mockedData) return USER_PERFORMANCE[userIdMocked];
  const response = await getUserPerformance(userIdAPI);
  return response?.data || USER_PERFORMANCE[userIdMocked];
}
