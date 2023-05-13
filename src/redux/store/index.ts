import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import redesReducer from '../reducers/redesReducer';
import habilidadesReducer from '../reducers/habilidadesReducer';

const rootReducer = combineReducers({
   auth: authReducer,
   red: redesReducer,
   habilidad: habilidadesReducer,
   //SEAGREGAN LOS REDUCERS
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
