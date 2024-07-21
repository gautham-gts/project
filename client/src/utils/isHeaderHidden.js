export const isHeaderHidden = (location) =>{
    const authRoutes = ['login', 'signup', 'reset-password'];
    const isValid = authRoutes.find((route)=> (location.split('/')[1] === route));
    if(isValid){
        return true;
    }
    return false;
}