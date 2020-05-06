import StreamsServices from "../../services/StreamsServices";
import CookieService from "../../services/CookieSerice";

export const namespaced = true;

export const state = {
    userData: {
        loggedIn:false,
        name:null,
        token:null
    }
};

export const mutations = {
    SET_ALL_UserData(state, userData) {
        state.userData.loggedIn = userData.success;
        state.userData.name = userData.name;
        state.userData.token = userData.token;
    }
};

export const actions = {
    login({ commit }, userData) {
        StreamsServices.postLogin(userData).then(response => {
            response.data = {success:true,token:"testtoken"};//TODO
            commit("SET_ALL_UserData",{
                success:response.data.success,
                name:userData.username,
                token:response.data.token
            });
            if(response.data.success)
                CookieService.setToken(response.data.token)
        });
    },
    authenticate({commit},token){
        StreamsServices.postToken(token).then(response => {
            response.data = {success:true,username:"testuser"}   //TODO
            if(response.data.success){
                commit("SET_ALL_UserData",{token:token,success:true,name:response.username}) 
            }else{
                commit("SET_ALL_UserData",{token:null,loggedIn:false,name:null})
                CookieService.removeToken();
            }
        });
    },
    logout({ commit }){
        commit("SET_ALL_UserData",{token:null,loggedIn:false,name:null})
        CookieService.removeToken();
    }
};
