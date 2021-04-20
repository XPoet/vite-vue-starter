/*
 * @Author: Aliom
 * @Date: 2021-04-20 10:12:22
 * @LastEditors: Aliom
 * @LastEditTime: 2021-04-20 10:18:58
 */
import NumFactoryStareTypes from '../store/modules/NumFactory/interface'

export default interface RootStareTypes {
  text: string;
}

export interface AllStateTypes extends RootStareTypes {
  numFactoryModule: NumFactoryStareTypes
}
