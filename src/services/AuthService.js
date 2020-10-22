import axios from "axios";
import getAuthHeader from "./auth-header"
const API_URL = "http://104.197.134.250/pos-api/";

class AuthService {
  login(loginObj) {
    return axios
      .post(API_URL + "index.cfm?endpoint=%2Fv2%2Fauthenticate-user", loginObj)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("currentUser", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("currentUser");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));;
  }

  authorize(authHeader) {
    return axios
      .post(API_URL + "index.cfm?endpoint=%2Fv2%2Fauthorize", {}, { headers: authHeader })
  }
}

export default new AuthService();