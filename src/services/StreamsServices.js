import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSource(type) {
    return apiClient.get("/source?type=" + type);
  },
  getMedia(source) {
    return apiClient.get("/media?source=" + source);
  },
  getStream(id) {
    return apiClient.get("/stream/" + id);
  },
  getMediaName(id) {
    return apiClient.get("/media/" + id);
  },
  getPresets() {
    return apiClient.get("/presets");
  },
  postLogin(data){
    return apiClient.post("/authenticate",data);
  }
};
