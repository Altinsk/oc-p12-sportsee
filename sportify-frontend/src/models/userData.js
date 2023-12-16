import { translations } from "./translations";

/**
 * formatting data
 * @returns formatted objects for user data
 */
export class UserData {
  constructor(data) {
    this.data = this.translate(data);
  }
  translate(obj) {
    if (Array.isArray(obj)) {
      return obj.map((item) => this.translate(item, translations));
    } else if (typeof obj === "object" && obj !== null) {
      for (let key in obj) {
        obj[key] = this.translate(obj[key], translations);
      }
      return obj;
    } else if (typeof obj === "string" && translations[obj]) {
      return translations[obj];
    }
    return obj;
  }
}
