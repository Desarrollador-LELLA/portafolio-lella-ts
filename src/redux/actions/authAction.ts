import { allAuth, auth } from '../../firebaseInicial/firebase';
import { AuthActions } from '../../interfaces/IAuth';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/index';
import { AUTH_TYPE } from '../../types/authType';
import { consultaGet, consultaPostBody } from '../../utilidades/metodosFirebase';

export const registraEntraGoogleAction = (): ThunkAction<void, RootState, null, AuthActions> => async (dispatch) => {
    dispatch({
        type: AUTH_TYPE.SET_LOADING,
        payload: true,
    });
    try {
        const provider = new allAuth.GoogleAuthProvider();
        const result = await allAuth.signInWithPopup(auth, provider);
        const adicional = allAuth.getAdditionalUserInfo(result);
        if (adicional?.isNewUser) {
            const token = await result.user.getIdToken();
            const retorno = await consultaPostBody('/auth/entrar', adicional.profile, token);
            await allAuth.sendEmailVerification(result.user);
            dispatch({
                type: AUTH_TYPE.NEED_VERIFICATION,
            });
            dispatch({
                type: AUTH_TYPE.SET_USER,
                payload: { ...retorno.resultado },
            });
        } else {
            if (adicional) {
                const token = await result.user.getIdToken();
                const retorno = await consultaGet('/auth/entrar', token);
                dispatch({
                    type: AUTH_TYPE.SET_USER,
                    payload: { ...retorno.resultado },
                });
            }
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: AUTH_TYPE.SET_ERROR,
            payload: 'erroresList(err)',
        });
    } finally {
        dispatch({
            type: AUTH_TYPE.SET_LOADING,
            payload: false,
        });
    }
};

export const salirAction = (): ThunkAction<void, RootState, null, AuthActions> => async (dispatch) => {
    try {
        dispatch({
            type: AUTH_TYPE.SET_LOADING,
            payload: true,
        });
        await auth.signOut();
        dispatch({
            type: AUTH_TYPE.SIGN_OUT,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: AUTH_TYPE.SET_ERROR,
            payload: 'erroresList(err)',
        });
    } finally {
        dispatch({
            type: AUTH_TYPE.SET_LOADING,
            payload: false,
        });
    }
};

const uno = {
    user: {
        uid: 'NxkenPPVt8NYbKN4jSE7HVvO2zG2',
        email: 'lella.soporte@gmail.com',
        emailVerified: true,
        displayName: 'Mi Pyme LELLA',
        isAnonymous: false,
        photoURL: 'https://lh3.googleusercontent.com/a/AGNmyxbh90rmoij0zIyDVtf1PQrT_27_S_I6_jMVOE6t=s96-c',
        providerData: [
            {
                providerId: 'google.com',
                uid: '111638002074713347166',
                displayName: 'Mi Pyme LELLA',
                email: 'lella.soporte@gmail.com',
                phoneNumber: null,
                photoURL: 'https://lh3.googleusercontent.com/a/AGNmyxbh90rmoij0zIyDVtf1PQrT_27_S_I6_jMVOE6t=s96-c',
            },
        ],
        stsTokenManager: {
            refreshToken:
                'APJWN8f2RGUrccjOpeblnKbpBDoXIzGo_UrmARzX99jRtjcnzT2FfpE9JaDymJlQ_kIr-g_9H2tXDGZ9K2dQDDYcZc-V0q1qSWPL33sjNXm5LWe8g0qSfNc_6YAU4Ni1fq2uLQKgZGoRfCZguDc-Lk9rmhLLjnYPtw43hxskgNqlNNyg096brLFNU95wihIrtZY4YGkgC4rbPxInVRYwAnrinhXfwJ2E6oVSSa2pxEtnkUH00cLEQhDKFU4d-LF04WEmt51vr5CDnFj1Y53n9VadOVZbWShUJ7CAqkK6nXsBq2pTemcbro1SHglymZhJsqBEtl_9pqUpXYGjyymGEVHtlAhcWH76j5EQvSHM00iaPvJgjrbZc8fsrkSNf-_yfCbeIgV2_P1_z4TmliGhR57xsOgi_G48zrebTt1UK4bWPnkGljnixX8Wor3eUqcpGTnKGQAE0QSm',
            accessToken:
                'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWkgUHltZSBMRUxMQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhiaDkwcm1vaWowekl5RFZ0ZjFQUXJUXzI3X1NfSTZfak1WT0U2dD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS93ZWItZGVzYXJyb2xsYWRvci1sZWxsYSIsImF1ZCI6IndlYi1kZXNhcnJvbGxhZG9yLWxlbGxhIiwiYXV0aF90aW1lIjoxNjc5NTAyNjY1LCJ1c2VyX2lkIjoiTnhrZW5QUFZ0OE5ZYktONGpTRTdIVnZPMnpHMiIsInN1YiI6Ik54a2VuUFBWdDhOWWJLTjRqU0U3SFZ2TzJ6RzIiLCJpYXQiOjE2Nzk1MDI2NjUsImV4cCI6MTY3OTUwNjI2NSwiZW1haWwiOiJsZWxsYS5zb3BvcnRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNjM4MDAyMDc0NzEzMzQ3MTY2Il0sImVtYWlsIjpbImxlbGxhLnNvcG9ydGVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.jJblq9UKQEp54yhCmXauX-u7tb4euHMnc7MN8odh-K2Hw4ssszb13HimGBOm--64YGN3hIqYVGEdyXHg9wE0lXgy8TjLcQyKQ973md2aZ_KV3aDUc10E4tfrFe5Eo2RFpJohV8LZYTpa3Ymmyk1mrA_6zLHYofMzqNXWE2CzYVG-RtTembcoWG7k5uA84ZiCQOCitSmUtcXHRSv5yjvjqIpj2MOMXhoCqQmh3TauapxPuunvlpZma32Io-QQgBal9ZOOPc3sbwrw7k_Uh5j5iBV-6Dn-RX1HiKcpW_pFmisa5PKlRN46I5hVsbITKT-QXABNK7xUcza0WEHrFw01gw',
            expirationTime: 1679506266577,
        },
        createdAt: '1679502665250',
        lastLoginAt: '1679502665251',
        apiKey: 'AIzaSyC1V97TN-i6jlcqJTGC21JojEkubUylEIM',
        appName: '[DEFAULT]',
    },
    providerId: 'google.com',
    _tokenResponse: {
        federatedId: 'https://accounts.google.com/111638002074713347166',
        providerId: 'google.com',
        email: 'lella.soporte@gmail.com',
        emailVerified: true,
        firstName: 'Mi Pyme',
        fullName: 'Mi Pyme LELLA',
        lastName: 'LELLA',
        photoUrl: 'https://lh3.googleusercontent.com/a/AGNmyxbh90rmoij0zIyDVtf1PQrT_27_S_I6_jMVOE6t=s96-c',
        localId: 'NxkenPPVt8NYbKN4jSE7HVvO2zG2',
        displayName: 'Mi Pyme LELLA',
        idToken:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWkgUHltZSBMRUxMQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhiaDkwcm1vaWowekl5RFZ0ZjFQUXJUXzI3X1NfSTZfak1WT0U2dD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS93ZWItZGVzYXJyb2xsYWRvci1sZWxsYSIsImF1ZCI6IndlYi1kZXNhcnJvbGxhZG9yLWxlbGxhIiwiYXV0aF90aW1lIjoxNjc5NTAyNjY1LCJ1c2VyX2lkIjoiTnhrZW5QUFZ0OE5ZYktONGpTRTdIVnZPMnpHMiIsInN1YiI6Ik54a2VuUFBWdDhOWWJLTjRqU0U3SFZ2TzJ6RzIiLCJpYXQiOjE2Nzk1MDI2NjUsImV4cCI6MTY3OTUwNjI2NSwiZW1haWwiOiJsZWxsYS5zb3BvcnRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNjM4MDAyMDc0NzEzMzQ3MTY2Il0sImVtYWlsIjpbImxlbGxhLnNvcG9ydGVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.jJblq9UKQEp54yhCmXauX-u7tb4euHMnc7MN8odh-K2Hw4ssszb13HimGBOm--64YGN3hIqYVGEdyXHg9wE0lXgy8TjLcQyKQ973md2aZ_KV3aDUc10E4tfrFe5Eo2RFpJohV8LZYTpa3Ymmyk1mrA_6zLHYofMzqNXWE2CzYVG-RtTembcoWG7k5uA84ZiCQOCitSmUtcXHRSv5yjvjqIpj2MOMXhoCqQmh3TauapxPuunvlpZma32Io-QQgBal9ZOOPc3sbwrw7k_Uh5j5iBV-6Dn-RX1HiKcpW_pFmisa5PKlRN46I5hVsbITKT-QXABNK7xUcza0WEHrFw01gw',
        context: '',
        oauthAccessToken: 'ya29.a0AVvZVsprEKfZKi-GgVAiLamxsTKlVmDpxvMVFJv073WqWHezpRYnEj6Gv6cw1bRTzXSDsrPr4mXMnLaBElLTfstrnAz6OxXpY6gUeVtv2Hr_tLcMTtDrc5n6-5wjt5QIopEcoux_WC4wfGl0S9ePwVQ6s2cqaCgYKAbkSARASFQF4udJhNnDLdL2zyOl6P2_cIGndDg0163',
        oauthExpireIn: 3598,
        refreshToken:
            'APJWN8f2RGUrccjOpeblnKbpBDoXIzGo_UrmARzX99jRtjcnzT2FfpE9JaDymJlQ_kIr-g_9H2tXDGZ9K2dQDDYcZc-V0q1qSWPL33sjNXm5LWe8g0qSfNc_6YAU4Ni1fq2uLQKgZGoRfCZguDc-Lk9rmhLLjnYPtw43hxskgNqlNNyg096brLFNU95wihIrtZY4YGkgC4rbPxInVRYwAnrinhXfwJ2E6oVSSa2pxEtnkUH00cLEQhDKFU4d-LF04WEmt51vr5CDnFj1Y53n9VadOVZbWShUJ7CAqkK6nXsBq2pTemcbro1SHglymZhJsqBEtl_9pqUpXYGjyymGEVHtlAhcWH76j5EQvSHM00iaPvJgjrbZc8fsrkSNf-_yfCbeIgV2_P1_z4TmliGhR57xsOgi_G48zrebTt1UK4bWPnkGljnixX8Wor3eUqcpGTnKGQAE0QSm',
        expiresIn: '3600',
        oauthIdToken:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk4NmVlOWEzYjc1MjBiNDk0ZGY1NGZlMzJlM2U1YzRjYTY4NWM4OWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjQwNzEwMDY2Nzk2LTZncWpqbmY1YnVpamRicG1vbzE5NmoyamVhYzRqbm1uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjQwNzEwMDY2Nzk2LTZncWpqbmY1YnVpamRicG1vbzE5NmoyamVhYzRqbm1uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExNjM4MDAyMDc0NzEzMzQ3MTY2IiwiZW1haWwiOiJsZWxsYS5zb3BvcnRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiNjRsRUxTeUdRczRQamh6cXhxM0NNZyIsImlhdCI6MTY3OTUwMjY2NSwiZXhwIjoxNjc5NTA2MjY1fQ.TQ-i1boT6FLajQQOJ6Jf36qjrlRqDOKUKb684j1kf9_zFOWlPG_lUrtO94ZBAVGSqkUrO1zVJqPO1dzD_N5Yp2KYvMT7q0LAbaDqH1_1kmctkNAsl-xyy-5f86hE1zWEWzS-rqWGeQoRHVoXUp4ewQR_9GBr-T9VGCeGQHPnjurUjvTqDoiY5Ba3LWNJkszB41DmTmdWAk9o_rp3eUCVaKfRICNyva_nFopjHr4K8AHSIkn-zCuaEaNe2fxeU1Ir7O2uQF1zFjccYxnbkP5YQgW1TNOQN3LHd4OFWugEfvYitdF04eT4VK8oDicpYvRXc8wLzpUTpWQFUK_BItyqMA',
        rawUserInfo:
            '{"name":"Mi Pyme LELLA","granted_scopes":"https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile","id":"111638002074713347166","verified_email":true,"given_name":"Mi Pyme","locale":"es","family_name":"LELLA","email":"lella.soporte@gmail.com","picture":"https://lh3.googleusercontent.com/a/AGNmyxbh90rmoij0zIyDVtf1PQrT_27_S_I6_jMVOE6t=s96-c"}',
        isNewUser: true,
        kind: 'identitytoolkit#VerifyAssertionResponse',
    },
    operationType: 'signIn',
};

const dos = {
    isNewUser: false,
    providerId: 'google.com',
    profile: {
        name: 'Mi Pyme LELLA',
        granted_scopes: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
        id: '111638002074713347166',
        verified_email: true,
        given_name: 'Mi Pyme',
        locale: 'es',
        family_name: 'LELLA',
        email: 'lella.soporte@gmail.com',
        picture: 'https://lh3.googleusercontent.com/a/AGNmyxbh90rmoij0zIyDVtf1PQrT_27_S_I6_jMVOE6t=s96-c',
    },
};
