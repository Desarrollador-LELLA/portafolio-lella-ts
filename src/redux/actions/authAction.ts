import { allAuth, auth } from "../../firebaseInicial/firebase";
import { AuthActions } from "../../interfaces/IAuth";
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store/index';

export const registraEntraGoogleAction = (onError: () => void): ThunkAction<void, RootState, null, AuthActions> => async (dispatch) => {
    try {
      const provider = new allAuth.GoogleAuthProvider();
      //const { _tokenResponse, user } = await allAuth.signInWithPopup(auth, provider)

      const result = await allAuth.signInWithPopup(auth, provider)
      console.log(result)
      //if (_tokenResponse.isNewUser) {
        // const userData = {
        //   id: _tokenResponse.localId,
        //   nombre: _tokenResponse.firstName ? _tokenResponse.firstName : 'Sin Nombre',
        //   apellido: _tokenResponse.lastName ? _tokenResponse.lastName : 'Sin Apellido',
        //   correo: _tokenResponse.email,
        //   imagen: _tokenResponse.photoUrl,
        //   rol: 'Cliente',
        //   fechaCreacion: allDb.serverTimestamp(),
        // };
        // await allDb.setDoc(allDb.doc(db, 'usuarios', _tokenResponse.localId), userData);
        // await allAuth.sendEmailVerification(user);
        // dispatch({
        //   type: AUTH_NEED_VERIFICATION,
        // });
        // dispatch({
        //   type: AUTH_SET_USER,
        //   payload: { id: userData.id, nombre: userData.nombre, apellido: userData.apellido, imagen: userData.imagen, rol: 'Cliente' },
        // });
      //}
    } catch (err) {
      onError();
      // dispatch({
      //   type: AUTH_SET_ERROR,
      //   payload: erroresList(err),
      // });
    }
  };