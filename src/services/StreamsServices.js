import axios from "axios";

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
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
  }
};
