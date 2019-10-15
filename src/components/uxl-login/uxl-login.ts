
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
import { template } from "./template";
import { listen, isNotNullNeitherEmpty } from "@uxland/uxl-utilities";
import { defaultOptions } from 'src/utilities';

@customElement("uxl-login")

export class UxlLogin extends LitElement {

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  public render() {
 
    return html`
    
      ${template(this)}
      
    `;
  }
  

  @property()
  public userName: string;

  @property()
  public emailPlaceholder: string;

  @property()
  public passwordPlaceholder: any;

  @property()
  public userNameLabel: string = null;

  @property()
  public displayName: string = "";

  @property()
  public userShowedName: string ="";

  @property()
  public canSubmit: boolean = false;

  @property()
  public userInputPattern: string = ""; 
  //email --> [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
  // text --> [A-Za-z]

  @property()
  public userInputType: string = "";
  //email
  //text

  @property()
  public canShow: boolean = false;

  @property()
  public passwordInputType: string = "password";

  @property()
  public loginButtonText: string;

  @property()
  public showPasswordButtonText: string = "Ver";

  @property()
  public submitMessage: string = "Bienvenid@";

  @property()
  public showMsgSubmit: string = "display:none";

  @property()
  public submitErrorMessage: string;

  @property()
  public newUserButton: string="Nuevo usuario";

  @property()
  public passwordIcon: string="";

  @property()
  public userIcon: string="";

  @property()
  public hideUserInput: boolean=false;

  @property()
  public showWelcomeMessage: boolean=false;

  @property()
  public forgotPasswordText:string="Recordar contraseña"

  @property()
  public forgotPassHref:string;

  @property()
  public userImgSrc:string;

  
  @query(".username")
  public userNameInput: any;

  @query(".password")
  public passwordInput: any;

  @query(".btn-acceder")
  public submitButton: any;

  @query(".btn-showPassword")
  public showPasswordButton: any;

  // @query(".btn-newUser")
  // public newUserButton: any;

  firstUpdated(){
    this.myDefaultOptions();
    this.handleShowUsername();
  }

  @listen("click",".btn-acceder")
  onClickEnter(){

    if(this.canSubmit){

        let event = new CustomEvent('my-event', {
          detail: {
            user: this.userNameInput.value, password: this.passwordInput.value
            
          }
        });
        this.dispatchEvent(event);
      
    }else{
    
     this.submitMessage = this.submitErrorMessage;
    }
  }

  @listen("click",".btn-newUser")
  onClickNewUser(){
   //new user  
  }

  @listen("click",".btn-showPassword")
  onClickPass(){
    this.changePasswordType();  
  }

  @listen("keyup", ".password")
  public onKeyUpPass(){
    this.userCanSubmit();
    this.showPassword();
  }

  @listen("keyup",".username")
  public onKeyUpUser(){
    this.userCanSubmit(); 
  }

  public userCanSubmit(){

    this.validPassword();
    this.validUsername();
  
  }

  public showPassword(){
    this.canShow = this.passwordInput 
                   && isNotNullNeitherEmpty(this.passwordInput.value);
  }

  public validUsername(){

    if(this.displayName || this.userName){
      this.canSubmit = this.passwordInput 
                      && isNotNullNeitherEmpty(this.passwordInput.value);
  }
}

  public validPassword(){
        
      this.canSubmit = this.userNameInput 
                      && isNotNullNeitherEmpty(this.userNameInput.value) 
                      && this.passwordInput 
                      && isNotNullNeitherEmpty(this.passwordInput.value);                  
  }

  public changePasswordType(){
 
    if(this.passwordInputType==="password"){
      this.passwordInputType="text";
      this.showPasswordButtonText="Ocultar";

    }else{
      this.passwordInputType="password";
      this.showPasswordButtonText="Ver";
    }
  }

  public handleShowUsername(){

    this.userShowedName = this.displayName ? this.displayName : this.userName;

    if(this.displayName || this.userName){
      this.hideUserInput=true;
      this.showWelcomeMessage=true;

    }else{     

      this.hideUserInput=false;
    }

    this.defaultUserImage();
    this.showDisplayNameOrUsername();
   
}

  public myDefaultOptions(){

    //his.userNameLabel = defaultOptions.usernameLabel;
    this.loginButtonText = defaultOptions.submitButtonText;
    this.submitErrorMessage = defaultOptions.errorMessage;
    this.submitMessage = defaultOptions.submitMessage;
    this.displayName = defaultOptions.displayName;
    this.showPasswordButtonText = defaultOptions.showPasswordButtonText;
    this.newUserButton = defaultOptions.newUserButton;
    this.passwordIcon = defaultOptions.passwordIcon;
    this.userIcon = defaultOptions.userIcon;
    this.emailPlaceholder=defaultOptions.emailPlaceholder;
    this.passwordPlaceholder = defaultOptions.passwordPlaceholder;
    //this.defaultUserImage = defaultOptions.userImgSrc;

  }

  public defaultUserImage(){

    if(!this.userImgSrc){
      this.userImgSrc="/src/components/uxl-login/icons/user.svg";
    }
  }

  public showDisplayNameOrUsername(){

    if(this.displayName){
          
      this.submitMessage += " " + this.displayName + "!"; 
      
    }else if(this.userName){

      this.submitMessage += " " + this.userName + "!"; 

    }else{    
    
      this.submitMessage += " " + this.userNameInput.value + "!"; 
    }

  }

}


// Componente que sirve de pasarela a los usuarios para acceder a la aplicación

// Permite introducir un usuario y una contraseña - OK
// Personalizar el tipo de usuario para que sea un correo - OK
// Activar el boton de enviar cuando el usuario ha introducido el usuario y password - OK
// Permitir mostrar el contenido del password - OK
// Opcionalmente mostrar el username (o display name) con un mensaje de bienvenida - OK
// Se tiene que poder personalizar el mensaje - OK
// Mediante el boton de acceso se lanza un evento con la información introducida por el usuario - OK
// Mostrar un mensaje de error una vez enviado el evento de submit - OK
// Opcionalmente permitir que los inputs contengan iconos - OK
// Se tiene que esconder el input de username - OK
// Opcionalmente mostrar un boton/enlace para la recuperación del password - OK
// Opcionalmente mostrar un boton/enlace de registro de nuevo usuario - OK
// Opcionalmente mostrar la imagen/icono del usuario - OK


//----------> PENDIENTE
// Personalizar estilos del componente (botones, inputs, etc)

//**LOCALIZACIÓN */
// Personalizar y localizar el texto del boton de submit
// Se tiene que poder localizar el mensaje


//*********************************************** */
/*

Arreglar nombres (más largos y más claros) - OK
Hacer más funciones - OK
demo-component
evento (enviar usuario/contraseña) - Ok?
varias demos diferentes
utilities - OK

*/



