import axios from "axios";

const apiClient = axios.create({
  baseURL: new Function("return "+process.env.VUE_APP_BASE_URL)(),
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSource() {
    return apiClient.post("/categories");
  },
  getMedia(category) {
    return apiClient.post("/media", { category: category });
  },
  getStream(stream_id, settings) {
    return apiClient.post("/stream", {
      stream_id: stream_id,
      settings: settings
    });
  },
  getPresets() {
    return apiClient.post("/presets");
  },
  postToken(data) {
    return apiClient.post("/authenticate", data);
  },
  postLogin(data) {
    return apiClient.post("/login", data);
  }
};
