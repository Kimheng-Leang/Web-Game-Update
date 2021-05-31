import { createStore } from 'vuex'

export default createStore({
  state: {
    games:[{}],
    news:[{}]
  },
  mutations: {
    UPDATE_GAMES(state, games){
      state.games=games;
    },
    UPDATE_NEWS(state,news){
      state.news=news;
    }
  },
  actions: {
    updateGames(context,games){
      context.commit('UPDATE_GAMES',games)
    },
    updateNews(context,news){
      context.commit('UPDATE_NEWS',news)
    }
  },
  getters: {
    getGames(state){
      return state.games;
    },
    getNews(state){
      return state.news
    }
  },
  modules: {
  }
})
