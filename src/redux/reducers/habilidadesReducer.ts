import { HabilidadActions, IHabilidades } from '../../interfaces/IHabilidad';
import { HABILIDADES_TYPE } from '../../types/habilidadesType';

const initialState: IHabilidades = {
   habilidadesHabilidad: { paga: 1, listpags: { pags: 0, items: [] } },
   loadingHabilidad: false,
   errorHabilidad: '',
   successHabilidad: '',
};

const habilidadesReducer = (state = initialState, action: HabilidadActions) => {
   switch (action.type) {
      case HABILIDADES_TYPE.SET_HABILIDADES:
         return {
            ...state,
            habilidadesHabilidad: { ...state.habilidadesHabilidad, listpags: action.payload },
         };
      case HABILIDADES_TYPE.SET_LOADING:
         return {
            ...state,
            loadingHabilidad: action.payload,
         };
      case HABILIDADES_TYPE.SET_ERROR:
         return {
            ...state,
            errorHabilidad: action.payload,
         };
      case HABILIDADES_TYPE.SET_SUCCESS:
         return {
            ...state,
            successHabilidad: action.payload,
         };
      case HABILIDADES_TYPE.SET_PAGACTUAL:
         return {
            ...state,
            habilidadesHabilidad: { ...state.habilidadesHabilidad, paga: action.payload },
         };
      default:
         return state;
   }
};

export default habilidadesReducer;
