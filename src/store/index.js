import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const baseURL = "http://localhost:3000/user";
export default new Vuex.Store({
  state: {
    user: [],
    editUser: "",
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getEditUser(state) {
      return state.editUser;
    },
  },
  actions: {
    registration(context, payload) {
      context.commit("registration", payload);
    },
    getUser(context) {
      axios
        .get(baseURL)
        .then((response) => {
          context.commit("user", response.data);
        })
        .catch((err) => console.log("err", err));
    },
    createUser(context, payload) {
      axios
        .post(baseURL, payload)
        .then((response) => {
          console.log('add', response);
          context.commit("add", response);
          this._vm.$toast.success('User Added successfully', {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
        })
        })
        .catch((err) => console.log("err", err));
    },
    DeleteUser(context, payload) {
      axios.delete(`${baseURL}/`+ payload.item.id).then(
        this._vm.$toast.error('deleted ', {
          position: "top-right",
          timeout: 2000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
      })
      )
      context.commit("DeleteUser", payload);
    },
    editUser(context, payload) {
      context.commit("editUser", payload);
    },
    UdateUser(context, payload) {
      axios
        .put(`${baseURL}/`+ payload.id, payload)
        .then((response) => {
          context.commit("UpdateUser", response.data);
          this._vm.$toast.success('User Updated successfully', {
            position: "top-right",
            timeout: 2000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
        })
        })
       .catch((err) => console.log("err", err));
    },
  },
  mutations: {
    user(state, payload) {
      console.log("response", payload);
      this.state.user = payload;
    },
    add(state, payload) {
      console.log('add', payload);
      this.state.user.push(payload.data);
    },
    UpdateUser(state, payload) {
      console.log(state.user);
      const existsAtIndex = state.user.findIndex(u => u.id === payload.id)
      if (existsAtIndex !== -1) {
        state.user[existsAtIndex] = payload
      } else {
        state.users.push(payload)
      }
  
      state.user = [...state.user]
      // this.state.user.push = payload;
    },
    DeleteUser(state, payload) {
      console.log(payload);
      this.state.user.splice(payload.i, 1);
    },
    editUser(state, payload) {
      this.state.editUser = payload.data;
    },
  },
  modules: {},
});
