import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../constant/data";

/**
 * MockedService
 * @returns mocked datas : USER_ACTIVITY | USER_AVERAGE_SESSIONS | USER_PERFORMANCE | USER_MAIN_DATA
 */
export default class MockedService {
  static async fetchData(path) {
    switch (path) {
      case "activity":
        return USER_ACTIVITY;
      case "average-sessions":
        return USER_AVERAGE_SESSIONS;
      case "performance":
        return USER_PERFORMANCE;
      default:
        return USER_MAIN_DATA;
    }
  }
}
