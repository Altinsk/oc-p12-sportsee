import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  getUserById,
} from "./axios-api";
import { UserData } from "../models/userData";
import { UserPerformance } from "../models/userPerformance";
import MockedService from "./MockedService";
import { mockedData } from "../components/Home";

export default class UserService {
  /**
   * getUserData() - API or mocked
   * @param {number} Number(userID) id of the user
   * @returns user datas
   */

  static async fetchUserData(userID) {
    if (!mockedData) {
      const response = await getUserById(userID);
      if (response.status === 200) {
        return new UserData(response.data?.data).data;
      } else {
        return null;
      }
    }
    const mockedServiceData = await MockedService.fetchData("main");
    const data = mockedServiceData.find(
      (element) => element.id === Number(userID)
    );
    return new UserData(data).data;
  }

  /**
   * getUserActivity() - API or mocked
   * @param {number} userId  id of the user
   * @returns user activities datas
   */
  static async fetchActivity(userID) {
    if (!mockedData) {
      const response = await getUserActivity(userID);
      if (response.status === 200) {
        return response.data.data?.sessions;
      } else {
        return null;
      }
    }
    const mockedServiceData = await MockedService.fetchData("activity");
    const data = mockedServiceData.find(
      (element) => element.userId === Number(userID)
    );
    return data.sessions;
  }

  /**
   * getUserAverageSessions() - API or mocked
   * @param {number} userId id of the user
   * @returns user average sessions datas
   */
  static async fetchAverageSessions(userID) {
    if (!mockedData) {
      const response = await getUserAverageSessions(userID);
      if (response.status === 200) {
        return response.data.data?.sessions;
      } else {
        return null;
      }
    }
    const mockedServiceData = await MockedService.fetchData("average-sessions");
    const data = mockedServiceData.find(
      (element) => element.userId === Number(userID)
    );
    return data.sessions;
  }

  /**
   * getUserPerformance() - API or mocked
   * @param {number} Number(userID) id of the user
   * @returns user performances datas
   */
  static async fetchUserPerformance(userID) {
    if (!mockedData) {
      const response = await getUserPerformance(userID);
      if (response.status === 200) {
        return new UserPerformance(response.data?.data).data;
      } else {
        return null;
      }
    }
    const mockedServiceData = await MockedService.fetchData("performance");
    const data = mockedServiceData.find(
      (element) => element.userId === Number(userID)
    );
    return new UserPerformance(data).data;
  }
}
