import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Adam Jahr'
    },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [{
        id: 1,
        text: '...',
        done: true
      },
      {
        id: 2,
        text: '...',
        done: false
      },
      {
        id: 3,
        text: '...',
        done: true
      },
      {
        id: 4,
        text: '...',
        done: false
      }
    ],
    events: [],
    eventsTotal: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_TOTAL_EVENTS(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          console.log('Total' + response.headers['x-total-count'])
          commit(
            'SET_TOTAL_EVENTS',
            parseInt(response.headers['x-total-count'])
          )
          commit('SET_EVENTS', response.data) //call a mutation sending in payload of response data
        })
        .catch(error => {
          console.log('There was an error:' + error.response)
        })
    }
  },
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})