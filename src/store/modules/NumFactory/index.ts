/*
 * @Author: Aliom
 * @Date: 2021-04-20 10:03:47
 * @LastEditors: Aliom
 * @LastEditTime: 2021-04-20 10:28:54
 */
import { Module } from "vuex";
import NumFactoryStareTypes from './interface';
import RootStateTypes from '../../interface';


// Create a new store Modules.
const numFactoryModule: Module<NumFactoryStareTypes, RootStateTypes> = {
  namespaced: process.env.NODE_ENV !== 'production',
  state: {
    name: 'numFactory-module',
    count: 1
  },
  mutations: {
    DOUBLE_COUNT(state) {
      state.count = 2 * state.count;
    }
  },
  actions: {
  },
}

export default numFactoryModule;
