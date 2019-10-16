import { StringifyOptions } from 'querystring';

export interface UxlLoginOptions{
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
    emailPlaceholder:string;
    passwordPlaceholder:any;
    passwordInputType:string;

}

export const defaultOptions : UxlLoginOptions = {
    welcomeMessage: 'Bienvenid@',
    errorMessage: 'Error',
    displayName:'',
    showPasswordButtonText: 'Ver',
    newUserButton: 'nuevo usuario',
    submitButtonText:'entrar',
    passwordIcon:'',
    userIcon:'',
    forgotPasswordText:'recordar contraseña',
    userImgSrc:'',
    emailPlaceholder:'email',
    passwordPlaceholder:'contraseña',
    passwordInputType:'password'
}



