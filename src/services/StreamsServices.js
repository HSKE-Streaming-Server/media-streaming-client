import axios from "axios";

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 60000 // after 60 sec the client will get an error if there was no response from API
});

export default {
  getSource(token) {
    return apiClient.post("/api/categories", { token: token });
  },
  getMedia(category, token) {
    return apiClient.post("/api/media", { category: category, token: token });
  },
  getStream(stream_id, settings,token) {
    return apiClient.post("/api/stream", {
      stream_id: stream_id,
      settings: settings, 
      token: token
    });
  },
  getPresets(token) {
    return apiClient.post("/api/presets", { token: token });
  },
  postToken(token) {
    return apiClient.post("/api/authenticate", { token: token });
  },
  postLogin(data) {
    return apiClient.post("/api/login", data);
  },
  postLogout(token) {
    return apiClient.post("/api/logout", { token: token });
  },
  postKeepAlive(data) {
    return apiClient.post("/api/keepalive", data);
  },
  postDetail(data) {
    return apiClient.post("/api/detail", data);
  }
};
