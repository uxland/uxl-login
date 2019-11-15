import { StringifyOptions } from 'querystring';

export interface UxlLoginOptions{
    userName: string;
    welcomeMessage: string;
    errorMessage: string;
    displayName: string;
    submitButtonText:string;
    userImgSrc:string;
    usernamePlaceholder:string;
    passwordPlaceholder:any;
    footerText: string;
   

}

export const defaultOptions : UxlLoginOptions = {
    userName:'',
    usernamePlaceholder:'Usuario',
    passwordPlaceholder:'Contraseña',
    submitButtonText:'Entrar',
    footerText: "Texto footer",
    welcomeMessage: 'Bienvenid@',
    errorMessage: 'Error',
    displayName:'Usuario',
    userImgSrc:"/src/components/uxl-login/icons/user.svg",
}



