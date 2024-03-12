
const isClient = (): boolean => typeof window !== 'undefined';

function setCookie(cookieName: string, cookieValue: string, daysToExpire: number) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expirestime = "expires=" + expirationDate.toUTCString();
    if(!isClient()){
        //TODO Ad Server Side
    }
    else {
        document.cookie = `${cookieName}=${cookieValue};${expirestime};path=/`;
    }
}


function getCookie(cookieName: string): string {
    if(!isClient()){
        //TODO Ad Server Side
        return "false";
    }
    else {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document!.cookie);
        const cookieArray = decodedCookie.split(';');

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
    }

    return "";
}

function deleteCookie(cookieName: string) {
    if(!isClient()){
        //TODO Ad Server Side
    }
    else {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

export {setCookie,deleteCookie,getCookie}
