import {
  fetchlogin,
  fetchlikes,
  fetchfollows,
  fetchfollowuser,
  fetchfollowlikes,
  fetchupdatepassword,
  fetchdeleteuser,
} from "../api/backend.js";

export default {
  async FETCH_LOGIN({ commit }, { user, call }) {
    try {
      const { data } = await fetchlogin(user);
      commit("SET_TOKEN", { data, call });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_LIKES({ commit }, userId) {
    try {
      const { data } = await fetchlikes(userId);
      commit("SET_LIKES", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_FOLLOWS({ commit }, userId) {
    try {
      const { data } = await fetchfollows(userId);
      commit("SET_FOLLOWS", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_FOLLOW_USER({ commit }, userId) {
    try {
      const { data } = await fetchfollowuser(userId);
      commit("SET_FOLLOW_USER", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_FOLLOW_LIKES({ commit }, userId) {
    try {
      const { data } = await fetchfollowlikes(userId);
      commit("SET_FOLLOW_LIKES", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_UPDATE_PASSWORD({ commit }, userData) {
    try {
      await fetchupdatepassword(userData);
      commit("DELETE_TOKEN");
    } catch (e) {
      console.log(e);
    }
  },
  async FETCH_DELETE_USER({ commit }, userId) {
    try {
      const { data } = await fetchdeleteuser(userId);
      commit("DELETE_USER", data);
      alert("회원정보가 성공적으로 삭제되셨습니다.");
    } catch (e) {
      console.log(e);
    }
  },
};
