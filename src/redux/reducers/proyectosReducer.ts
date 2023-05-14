import { IProyectos, ProyectoActions } from '../../interfaces/IProyecto';
import { PROYECTOS_TYPE } from '../../types/proyectosType';

const initialState: IProyectos = {
   proyectosProyecto: { paga: 1, listpags: { pags: 0, items: [] } },
   loadingProyecto: false,
   errorProyecto: '',
   successProyecto: '',
};

const proyectosReducer = (state = initialState, action: ProyectoActions) => {
   switch (action.type) {
      case PROYECTOS_TYPE.SET_PROYECTOS:
         return {
            ...state,
            proyectosProyecto: { ...state.proyectosProyecto, listpags: action.payload },
         };
      case PROYECTOS_TYPE.SET_LOADING:
         return {
            ...state,
            loadingProyecto: action.payload,
         };
      case PROYECTOS_TYPE.SET_ERROR:
         return {
            ...state,
            errorProyecto: action.payload,
         };
      case PROYECTOS_TYPE.SET_SUCCESS:
         return {
            ...state,
            successProyecto: action.payload,
         };
      case PROYECTOS_TYPE.SET_PAGACTUAL:
         return {
            ...state,
            proyectosProyecto: { ...state.proyectosProyecto, paga: action.payload },
         };
      default:
         return state;
   }
};

export default proyectosReducer;
