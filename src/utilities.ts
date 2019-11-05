import { StringifyOptions } from 'querystring';

export interface UxlLoginOptions{
    userName: string;
    welcomeMessage: string;
    errorMessage: string;
    displayName: string;
    showPasswordButtonText: string;
    newUserButton: string;
    submitButtonText:string;
    passwordIcon:string;
    userIcon:string;
    forgotPasswordText:string;
    userImgSrc:string;
    usernamePlaceholder:string;
    passwordPlaceholder:any;
    footerText: string;
   

}

export const defaultOptions : UxlLoginOptions = {
    userName:'',
    welcomeMessage: 'Bienvenid@',
    errorMessage: 'Error',
    displayName:'',
    showPasswordButtonText: 'Ver',
    newUserButton: 'Nuevo usuario',
    submitButtonText:'Entrar',
    passwordIcon:'',
    userIcon:'',
    forgotPasswordText:'Recordar contraseña',
    userImgSrc:'',
    usernamePlaceholder:'Usuario',
    passwordPlaceholder:'Contraseña',
    footerText: "Texto footer"
}



