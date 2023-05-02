import { IRedes, RedActions } from '../../interfaces/IRed';
import { REDES_TYPE } from '../../types/redesType';

const initialState: IRedes = {
   redesRed: [],
   loadingRed: false,
   errorRed: '',
   successRed: '',
};

const redesReducer = (state = initialState, action: RedActions) => {
   switch (action.type) {
      case REDES_TYPE.SET_REDES:
         return {
            ...state,
            redesRed: action.payload,
         };
      case REDES_TYPE.SET_LOADING:
         return {
            ...state,
            loadingRed: action.payload,
         };
      case REDES_TYPE.SET_ERROR:
         return {
            ...state,
            errorRed: action.payload,
         };
      case REDES_TYPE.SET_SUCCESS:
         return {
            ...state,
            successRed: action.payload,
         };
      default:
         return state;
   }
};

export default redesReducer;
