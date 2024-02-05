import { getToken } from "./utils";


export const handlelogout = async () => {
    // const token = localStorage.getItem('Token');
    const token = getToken();

    try {
        const response = await fetch('http://localhost:5000/api/users/logout', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const confirm = window.confirm('Are you sure you want to logout?');
            if (confirm) {
                localStorage.removeItem('Token');
                window.location.href = '/home'
            }
            else {
                console.log('Logout Cancelled')
            }
        }
        else {
            console.log('Logout Failed')
        }
    
    }

    catch (e) {
        console.log('Error during logging out' + e)

    }
}



