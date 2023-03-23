import { AuthActions, IAuths } from '../../interfaces/IAuth';
import { AUTHTYPE, AUTH_NEED_VERIFICATION, AUTH_SET_ERROR, AUTH_SET_LOADING, AUTH_SET_SUCCESS, AUTH_SET_USER, AUTH_SIGN_OUT } from '../../types/authType';

const initialState: IAuths = {
    usuarioAuth: undefined,
    authenticatedAuth: false,
    loadingAuth: true,
    errorAuth: '',
    needVerificationAuth: false,
    successAuth: '',
};

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AUTH_SET_USER:
            return {
                ...state,
                usuarioAuth: action.payload,
                authenticatedAuth: true,
            };
        case AUTH_SET_LOADING:
            return {
                ...state,
                loadingAuth: action.payload,
            };
        case AUTH_SIGN_OUT:
            return {
                ...state,
                usuarioAuth: undefined,
                authenticatedAuth: false,
                loadingAuth: false,
            };
        case AUTH_SET_ERROR:
            return {
                ...state,
                errorAuth: action.payload,
            };
        case AUTH_NEED_VERIFICATION:
            return {
                ...state,
                needVerificationAuth: true,
            };
        case AUTH_SET_SUCCESS:
            return {
                ...state,
                successAuth: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;

const uno = {
    user: {
        uid: 'mNKUNAxVvDTJsNZUukYZObYFeu43',
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
                'APJWN8fJ4wfi8JbCrvP0llsumoPV-zgx6VThaGuRVnh8Jnr6cxKnJAYtLlo6fesazhZ0FBne9OLND6qENm7ivjaqyBkG3hIPMmmtaH0Xv4zrrGHSLgHfwxrvZY_9JLQibbV5ZS_3NGgqHDLiyLIuiviWs6lKbXf6IaoIrdyj_CfoN8sJPSf4nobgop8ILnBNY1-u_6wSLpSpHDZ_QP4Kwl59LdLdofpsWFkb3HCSeUNdQbi_qXWpDkCthg4lc7sdSuBpncbW6WnpveJsIt_zaiwpJv2ZMqzWjof0SsT5autThi3drmdRObT75oKjYUTucZZ6ZpNVOtAGlhuBKIUp6BQL2llDlA2mOSOGp8iyi14sB1MZ_83mKNBweIC7hUTPhmc9kRjrGeswyDv6b6gsnO6pWXxttsBizl7FlEbBa5NLLXvq4bNk1IreYxjYMci1dQFGzbwrJ7KJ',
            accessToken:
                'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWkgUHltZSBMRUxMQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhiaDkwcm1vaWowekl5RFZ0ZjFQUXJUXzI3X1NfSTZfak1WT0U2dD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS93ZWItZGVzYXJyb2xsYWRvci1sZWxsYSIsImF1ZCI6IndlYi1kZXNhcnJvbGxhZG9yLWxlbGxhIiwiYXV0aF90aW1lIjoxNjc5NDk2MzA3LCJ1c2VyX2lkIjoibU5LVU5BeFZ2RFRKc05aVXVrWVpPYllGZXU0MyIsInN1YiI6Im1OS1VOQXhWdkRUSnNOWlV1a1laT2JZRmV1NDMiLCJpYXQiOjE2Nzk0OTYzMDcsImV4cCI6MTY3OTQ5OTkwNywiZW1haWwiOiJsZWxsYS5zb3BvcnRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNjM4MDAyMDc0NzEzMzQ3MTY2Il0sImVtYWlsIjpbImxlbGxhLnNvcG9ydGVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.UGySONfVsWsmIFPBk7n19ObkZmxpYp5ggRvBhkqMxe4b-yF-dbs5YUiVvzcrrNluuaTc3qsHihLTJq74-ULZsLNB-9NI4Py6xDTGTrAYSI0r9tF7ww6VPscTuvStGm3hIBdWqeJA1v1j2hNUEoAJNiB7hkRtcLBWgX97xokWIMLPA0Gn7Y8puNOF8YRSXxRsg4919fWxNzOE-8fZIkRu2Q5m9x9Vk2rAwlPnamw1rvHLzuU3_7VurI1u5s1DN2RHcUPl3dBY3YqjTkKKSsMtfIHyoqsaOodhU_fIla-HQ1OkOD1Pj7DKCz_9oL0m4YTh2naADOgA1EAvXYcVk-2ToA',
            expirationTime: 1679499907850,
        },
        createdAt: '1679496148221',
        lastLoginAt: '1679496307094',
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
        localId: 'mNKUNAxVvDTJsNZUukYZObYFeu43',
        displayName: 'Mi Pyme LELLA',
        idToken:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWkgUHltZSBMRUxMQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhiaDkwcm1vaWowekl5RFZ0ZjFQUXJUXzI3X1NfSTZfak1WT0U2dD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS93ZWItZGVzYXJyb2xsYWRvci1sZWxsYSIsImF1ZCI6IndlYi1kZXNhcnJvbGxhZG9yLWxlbGxhIiwiYXV0aF90aW1lIjoxNjc5NDk2MzA3LCJ1c2VyX2lkIjoibU5LVU5BeFZ2RFRKc05aVXVrWVpPYllGZXU0MyIsInN1YiI6Im1OS1VOQXhWdkRUSnNOWlV1a1laT2JZRmV1NDMiLCJpYXQiOjE2Nzk0OTYzMDcsImV4cCI6MTY3OTQ5OTkwNywiZW1haWwiOiJsZWxsYS5zb3BvcnRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNjM4MDAyMDc0NzEzMzQ3MTY2Il0sImVtYWlsIjpbImxlbGxhLnNvcG9ydGVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.UGySONfVsWsmIFPBk7n19ObkZmxpYp5ggRvBhkqMxe4b-yF-dbs5YUiVvzcrrNluuaTc3qsHihLTJq74-ULZsLNB-9NI4Py6xDTGTrAYSI0r9tF7ww6VPscTuvStGm3hIBdWqeJA1v1j2hNUEoAJNiB7hkRtcLBWgX97xokWIMLPA0Gn7Y8puNOF8YRSXxRsg4919fWxNzOE-8fZIkRu2Q5m9x9Vk2rAwlPnamw1rvHLzuU3_7VurI1u5s1DN2RHcUPl3dBY3YqjTkKKSsMtfIHyoqsaOodhU_fIla-HQ1OkOD1Pj7DKCz_9oL0m4YTh2naADOgA1EAvXYcVk-2ToA',
        context: '',
        oauthAccessToken: 'ya29.a0AVvZVsog9JdNCHAxYMyboPRxBimKPqA3vrI3rzy0aEMszPSzJgax4OZM-DRIG90SrwnubTeYLJQs3N_7EM0Wwdl26AU2MZSu2J0l-bJnYDmoUdg_O0iNeMtqtM4CFEBkCaQnoFU3JAyjrgVy2s4bAaQ3eN2KaCgYKAdsSARASFQGbdwaIL9reZ-fz4pCHT4u8lacc5A0163',
        oauthExpireIn: 3599,
        refreshToken:
            'APJWN8fJ4wfi8JbCrvP0llsumoPV-zgx6VThaGuRVnh8Jnr6cxKnJAYtLlo6fesazhZ0FBne9OLND6qENm7ivjaqyBkG3hIPMmmtaH0Xv4zrrGHSLgHfwxrvZY_9JLQibbV5ZS_3NGgqHDLiyLIuiviWs6lKbXf6IaoIrdyj_CfoN8sJPSf4nobgop8ILnBNY1-u_6wSLpSpHDZ_QP4Kwl59LdLdofpsWFkb3HCSeUNdQbi_qXWpDkCthg4lc7sdSuBpncbW6WnpveJsIt_zaiwpJv2ZMqzWjof0SsT5autThi3drmdRObT75oKjYUTucZZ6ZpNVOtAGlhuBKIUp6BQL2llDlA2mOSOGp8iyi14sB1MZ_83mKNBweIC7hUTPhmc9kRjrGeswyDv6b6gsnO6pWXxttsBizl7FlEbBa5NLLXvq4bNk1IreYxjYMci1dQFGzbwrJ7KJ',
        expiresIn: '3600',
        oauthIdToken:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk4NmVlOWEzYjc1MjBiNDk0ZGY1NGZlMzJlM2U1YzRjYTY4NWM4OWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjQwNzEwMDY2Nzk2LTZncWpqbmY1YnVpamRicG1vbzE5NmoyamVhYzRqbm1uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjQwNzEwMDY2Nzk2LTZncWpqbmY1YnVpamRicG1vbzE5NmoyamVhYzRqbm1uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTExNjM4MDAyMDc0NzEzMzQ3MTY2IiwiZW1haWwiOiJsZWxsYS5zb3BvcnRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiNEpoSVp4ZnVaX2RzNFhKME9fRThEdyIsImlhdCI6MTY3OTQ5NjMwNywiZXhwIjoxNjc5NDk5OTA3fQ.Cf4l5ZYwL-YzeCzSMHzrAWheetxbwiMMawiha_9USQoFUyoRef-q77FjHtGq1Qs-mT6Xn2HRvoxkyOFH2IBi3546ACZeTMwl_ubrqEabtV9wu92zqWpoP-cOZ2bcI-AOVBWZWiIln3xSFEtQtse1JHTZ4D_olPsBTTr-24tNKOQ2G16wFAuoO2evaxRdLztVKWK2dGq7pa5z9xvwdBQTK6jGKKVBKMmpYWDXlWtu3LlhsrILj0XZyZ9TMqGMNDO3mk3W2532qObUlOUTPxzQi7ImfwKHrVuWpR6NYevg2cODxpWXTg4ZvcbDyc7vFdSyDQzEug7yi3_uTb7QquO_FA',
        rawUserInfo:
            '{"name":"Mi Pyme LELLA","granted_scopes":"openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile","id":"111638002074713347166","verified_email":true,"given_name":"Mi Pyme","locale":"es","family_name":"LELLA","email":"lella.soporte@gmail.com","picture":"https://lh3.googleusercontent.com/a/AGNmyxbh90rmoij0zIyDVtf1PQrT_27_S_I6_jMVOE6t=s96-c"}',
        kind: 'identitytoolkit#VerifyAssertionResponse',
    },
    operationType: 'signIn',
};
