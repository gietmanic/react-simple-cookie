"use client"
import { useState, useEffect } from 'react';
import {deleteCookie, getCookie, setCookie} from "./functions.js";
const isClient = (): boolean => typeof window !== 'undefined';

const useGetCookie = (cookieName: string): { cookieValue: string} => {
    const [cookieValue, setCookieValue] = useState<string>('');

    useEffect(() => {
        const cookievalue = getCookie(cookieName)
        setCookieValue(cookievalue)
    }, [cookieName]);

    return { cookieValue };
};
const useSetCookie = (cookieName: string, cookieValue: string, daysToExpire: number) => {
    setCookie(cookieName,cookieValue,daysToExpire);
};

const useDeleteCookie = (cookieName: string) => {
    deleteCookie(cookieName)
};


export {useGetCookie,useSetCookie,useDeleteCookie}


