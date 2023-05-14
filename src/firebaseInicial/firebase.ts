import fireConfig from './config';
import { initializeApp } from 'firebase/app';
import * as allAna from 'firebase/analytics';
import * as allAuth from 'firebase/auth';

const app = initializeApp(fireConfig);
const ana = allAna.getAnalytics(app);
const auth = allAuth.getAuth(app);

export default app;
export { auth, allAuth, ana, allAna };
