document.addEventListener("DOMContentLoaded", ()=>{

    // Function To Check if a cookie exists
    function checkCookie(name){
        const cookies = document.cookie.split("; ");

        for(let i =0; i < cookies.length; i++){
            const cookie = cookies[i].split('=');
            if(cookie[0] === name){
                return true;
            }
        }
        return false
    }

    // Function to create a new cookie
    function createCookie(name,value, days){
        let expires = '';
        if(days){
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    // Function to get the value of a cookie
    function getCookie(name){
        const cookies = document.cookie.split('; ');
        for(let i = 0; i < cookies.length; i++){
            const cookie = cookies[i].split('=');
            if(cookie[0] === name){
                return cookie[1];
            }
        }
        return null;
    }

    if(checkCookie("isSignedIn")){
        window.location.href = "/admin";
    } else{
        window.location.href = "/admin/signin";
    }

});