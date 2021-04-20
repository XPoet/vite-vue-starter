/*
 * @Author: Aliom
 * @Date: 2021-04-20 10:12:12
 * @LastEditors: Aliom
 * @LastEditTime: 2021-04-20 10:18:39
 */
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import RootStateTypes, { AllStateTypes } from './interface';

import numFactoryModule from "./modules/NumFactory";

export const store = createStore<RootStateTypes>({
  state: {
    text: "vuex全局根目录",
  },
  getters: {},
  mutations: {
  },
  actions: {},
  modules: {
    numFactoryModule
  }
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
