import axios from 'axios';

const state = {
  user: null,
  users: [{
    name: 'Dwayne Johnson',
    image: 'avatar-0.jpg',
  },
  {
    name: 'Johnny Depp',
    image: 'avatar-1.jpg',
  },
  {
    name: 'Tom Hardy',
    image: 'avatar-2.jpg',
  },
  {
    name: 'Jim Carrey',
    image: 'avatar-3.jpg',
  },
  {
    name: 'Scarlett Johansson',
    image: 'avatar-7.jpg',
  },
  {
    name: 'Ivan Dimitrov',
    image: 'avatar-5.jpg',
  },
  ],
};

const getters = {
  loggedIn(state) {
    return !!state.user;
  },
  users(state) {
    return state.users;
  },
  user(state) {
    return state.user;
  },
};

const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    state.user.image = 'avatar-4.jpg';
    localStorage.setItem('user', JSON.stringify(userData));
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
  },
  UNAUTHORIZE() {
    localStorage.removeItem('user');
    window.location.reload();
  },
};

const actions = {
  register(context, user) {
    axios.post('/register', user)
      .then((data) => {
        context.commit('SET_USER_DATA', data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  login(context, user) {
    // axios.post('/login', user)
    //   .then((data) => {
    //     context.commit('SET_USER_DATA', data.user);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //  for testing
    if (user.email && user.password) {
      context.commit('SET_USER_DATA', user);
    } else {
      alert('Error');
    }
  },
  logOut(context) {
    context.commit('UNAUTHORIZE');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
