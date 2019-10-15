import { StringifyOptions } from 'querystring';

export interface UxlLoginOptions{
    usernameLabel: string;
    submitMessage: string;
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

}

export const defaultOptions : UxlLoginOptions = {
    usernameLabel : 'usuario',
    submitMessage: 'Bienvenid@',
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
    passwordPlaceholder:'contraseña'

}


