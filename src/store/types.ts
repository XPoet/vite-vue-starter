import NumFactoryStateTypes from './modules/NumFactory/types'

export default interface RootStareTypes {
  text: string
}

export interface AllStateTypes extends RootStareTypes {
  numFactoryModule: NumFactoryStateTypes
}
