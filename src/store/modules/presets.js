import StreamsServices from "../../services/StreamsServices";

export const namespaced = true;

export const state = {
  presets: []
};

export const mutations = {
  SET_ALL_PRESETS(state, presets) { 
    let temp = {};
   Object.keys(presets).forEach((key)=>{
     temp[key]={};
     presets[key].forEach((preset)=>{
       temp[key][preset.presetID]=preset;
     })
   })
    state.presets = temp;
  }
};

export const actions = {
  fetchAllPresets({ commit }) {
    StreamsServices.getPresets().then(response => {
      commit("SET_ALL_PRESETS", response.data);
    });
  }
};
