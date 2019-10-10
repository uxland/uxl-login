export interface UxlLoginOptions{
    usernameLabel: string;
    submitMessage: string;
    errorMessage: string;
}

export const defaultOptions : UxlLoginOptions = {
    usernameLabel : 'usuario',
    submitMessage: 'Enviar',
    errorMessage: 'Error'
}