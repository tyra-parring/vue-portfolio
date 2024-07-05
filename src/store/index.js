import { createStore } from 'vuex';

const hostedData = "https://tyra-parring.github.io/first_api/data/data.json";

export default createStore({
  state: {
    about: {},
    welcomeMessage: "",
    projects: [],
    education: [],
    skills: [],
    softSkills: [],
    workExp: [],
    testimonials: [],
    contact: {},
    languages: [],
    professionalSummary: "",
    socialMedia: {},
    funFacts: [],
  },
  mutations: {
    setData(state, data) {
      state.about = data.about || {};
      state.welcomeMessage = data.welcomeMessage || "";
      state.projects = data.projects || [];
      state.education = data.education || [];
      state.skills = data.skills || [];
      state.softSkills = data.softSkills || [];
      state.workExp = data.workExp || [];
      state.testimonials = data.testimonials || [];
      state.contact = data.contact || {};
      state.languages = data.languages || [];
      state.professionalSummary = data.professionalSummary || "";
      state.socialMedia = data.socialMedia || {};
      state.funFacts = data.funFacts || [];
    },
  },
  actions: {
    fetchData({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            commit('setData', data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            
            commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        commit('setError', 'An unexpected error occurred');
      }
    },
  },
  modules: {},
});

