import NumFactoryStateTypes from '../store/modules/NumFactory/interface'

export default interface RootStareTypes {
  text: string
}

export interface AllStateTypes extends RootStareTypes {
  numFactoryModule: NumFactoryStateTypes
}
