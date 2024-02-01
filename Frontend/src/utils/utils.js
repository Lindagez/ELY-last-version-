// Retrieve the token from the cookie
export const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
};

export const getToken = () => {
   const token = localStorage.getItem('Token');
    if (!token) {
         return false;
    }
    return token;
};

export const getFullYear = () => {
    return new Date().getFullYear();
}
