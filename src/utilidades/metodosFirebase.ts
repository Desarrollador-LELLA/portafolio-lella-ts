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

export const tester = () => {}