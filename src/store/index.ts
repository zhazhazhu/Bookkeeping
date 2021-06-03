import Vue from 'vue'
import Vuex from 'vuex'
import { RecordItem, RootState } from '../types/index';



Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    recordList:[]
  } as RootState,
  mutations: {
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetch(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || "[]") as RecordItem[];
    },
    clone(state){
      JSON.parse(JSON.stringify(state))
    },
  },
})

export default store
