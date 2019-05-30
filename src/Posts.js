import axios from "axios";

const url = "http://localhost:50094/api/contacts";

class Service {
  static async getUsers() {
    const res = await axios.get(url);
    const data = res.data;
    return data;
  }

  static addUser(userData) {
    return axios.post(url, userData, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }

  static deleteUser(id) {
    return axios.delete(url, { data: { id } });
  }
}

export default Service;
