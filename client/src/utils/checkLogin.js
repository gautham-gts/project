import { signout } from '../services/login/signout';
import { sendErrorNotification } from '../services/notifications';
import { getLocalStorageKey } from './localStorage';

export const checkLoginStatus = (location, navigate) =>{
    location = location.pathname;
    const now = Date.now();
    const token = getLocalStorageKey('token');
    const email = getLocalStorageKey('email');
    const expiry = getLocalStorageKey('expiry') * 1000;
    
    const authRoutes = ['login', 'signup'];
    const isValid = authRoutes.find((route)=> (location.split('/')[1] === route));
    
    if(!isValid){
        if(!(token || email) || (expiry < now)){
            signout();
            navigate('/login');
            sendErrorNotification('Access has expired please login again.');
            return;
        }
    }
}