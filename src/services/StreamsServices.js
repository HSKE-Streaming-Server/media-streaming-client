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
  getSource() {
    return apiClient.post("/api/categories");
  },
  getMedia(category) {
    return apiClient.post("/api/media", { category: category });
  },
  getStream(stream_id, settings) {
    return apiClient.post("/api/stream", {
      stream_id: stream_id,
      settings: settings
    });
  },
  getPresets() {
    return apiClient.post("/api/presets");
  },
  postToken(data) {
    return apiClient.post("/api/authenticate", data);
  },
  postLogin(data) {
    return apiClient.post("/api/login", data);
  },
  postKeepAlive(data){
    return apiClient.post("/api/keepalive", data);
  }
};
