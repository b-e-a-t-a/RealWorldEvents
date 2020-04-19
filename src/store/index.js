import Vue from 'vue'
import Vuex from 'vuex'

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
    events: [{
        id: 1,
        title: 'aaa',
        organizer: 'qqq'
      },
      {
        id: 2,
        title: 'bbb',
        organizer: 'qqq'
      },
      {
        id: 3,
        title: 'ccc',
        organizer: 'qqq'
      },
      {
        id: 4,
        title: 'ddd',
        organizer: 'rrr'
      }
    ]
  },
  mutations: {},
  actions: {},
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