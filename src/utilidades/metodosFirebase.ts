// export const registraLoginUsuario = async ({ correo, clave }, correcto, errores) => {
//     try {
//         const res = await allAuth.createUserWithEmailAndPassword(auth, correo, clave);
//         if (res.user) {
//             const userData = {
//                 id: res.user.uid,
//                 correo,
//                 rol: 'Cliente',
//                 imagen: '',
//                 fechaCreacion: allDb.serverTimestamp(),
//             };
//             await allDb.setDoc(allDb.doc(db, 'usuarios', res.user.uid), userData);
//             await allAuth.sendEmailVerification(res.user);
//             correcto({ id: userData.id, rol: 'Cliente' });
//         }
//     } catch (err) {
//         errores(erroresList(err));
//     }
// };
//

import { IRetornoBack } from "../interfaces/IRetornos";

export const consultaPostBody = async (url: string, bodydatos: {} | null, token: string): Promise<IRetornoBack> => {
    const retorno = await fetch(`${process.env.REACT_APP_HOSTAPI}${url}`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(bodydatos),
        headers: { authorization: token, 'Content-Type': 'application/json' },
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => err);
        return retorno;
};

export const consultaGet = async (url: string, token: string): Promise<IRetornoBack> => {
    const retorno = await fetch(`${process.env.REACT_APP_HOSTAPI}${url}`, {
        headers: { authorization: token, 'Content-Type': 'application/json' },
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => err);
        return retorno;
};

export const tester = () => {};
