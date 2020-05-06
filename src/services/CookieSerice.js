import VueCookies from 'vue-cookies';
import Vue from 'vue';

Vue.use(VueCookies);
Vue.$cookies.config('1y');

export default{

    getSettings(){
         return Vue.$cookies.get("settings");
    },
    setSettings(newSettings){
        Vue.$cookies.set("settings",newSettings);
    },
    getToken(){
        return Vue.$cookies.get("token");
    },
    setToken(token){
        Vue.$cookies.set("token",token);
    },
    removeToken(){
        Vue.$cookies.remove("token");
    }
}