import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.cofig';
const inizializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default inizializeAuthentication;