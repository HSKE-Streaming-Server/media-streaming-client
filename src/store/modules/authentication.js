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
        return StreamsServices.postLogin(userData).then(response => {
            response.data = {success:true,token:"testtoken"};//TODO
            commit("SET_ALL_UserData",{
                success:response.data.success,
                name:userData.username,
                token:response.data.token
            });
            if(response.data.success)
                CookieService.setToken(response.data.token)
            return response.data.success;
        });
    },
    authenticate({ commit, dispatch },token){
        return StreamsServices.postToken(token).then(response => {
            response.data = {success:true,username:"testuser"}   //TODO
            if(response.data.success){
                commit("SET_ALL_UserData",{token:token,success:true,name:response.username}) 
            }else{
                commit("SET_ALL_UserData",{token:null,loggedIn:false,name:null})
                CookieService.removeToken();
            }
            return response.data.success;
        }).catch(error => {
            const notification = {
                type: "error",
                message: "There was a problem with authenticate: " + error.message
            };
            dispatch("notification/addNotification", notification, { root: true });
        });
    },
    logout({ commit }){
        commit("SET_ALL_UserData",{token:null,loggedIn:false,name:null})
        CookieService.removeToken();
    }
};
