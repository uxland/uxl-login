
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
import { template } from "./template";
import { listen, isNotNullNeitherEmpty } from "@uxland/uxl-utilities";

@customElement("uxl-login")

export class UxlLogin extends LitElement {

  @property()
  public canSubmit: boolean = false;

  @property()
  public canShow: boolean = false;

  @property()
  public inputType: string = "password";

  @property()
  public showPassText: string = "Mostrar Contraseña";

  @property()
  public welcomeMsg: string = "";

  @query(".username")
  public userNameInput: any;

  @query(".password")
  public passwordInput: any;

  @query(".btn-acceder")
  public btnAcceder: any;

  @query(".btn-showPassword")
  public btnShowPass: any;



  //decorator listen (event listener, pasas acción y elemento al que se le aplica)
  @listen("click",".btn-acceder")
  onClickEnter(){
    this.welcomeMsg="Welcome " + this.userNameInput.value + "!"; //preguntar cómo hacer sin +
  

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

  //user can login if username and password are typed

  //ponemos tanto el valor del elemento como el elemento, por si no existiera
  public userCanSubmit(){
    this.canSubmit = this.userNameInput 
                    && isNotNullNeitherEmpty(this.userNameInput.value) 
                    && this.passwordInput 
                    && isNotNullNeitherEmpty(this.passwordInput.value);
                    //si todo esto se cumple = true
  }

  public showPassword(){
    this.canShow = this.passwordInput 
                   && isNotNullNeitherEmpty(this.passwordInput.value);
  }

  public changePasswordType(){
 
    if(this.inputType==="password"){

      this.inputType="text";
      this.showPassText="Ocultar Contraseña";

    }else{
      this.inputType="password";
      this.showPassText="Mostrar Contraseña";
    }
  }

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
}


// Componente que sirve de pasarela a los usuarios para acceder a la aplicación

// Permite introducir un usuario y una contraseña - OK
// Personalizar el tipo de usuario para que sea un correo - OK
// Activar el boton de enviar cuando el usuario ha introducido el usuario y password - OK
// Permitir mostrar el contenido del password - OK
// Opcionalmente mostrar el username con un mensaje de bienvenida - OK

// Opcionalmente mostrar un boton/enlace para la recuperación del password
// Opcionalmente mostrar un boton/enlace de registro de nuevo usuario


// Mostrar un mensaje de error una vez enviado el evento de submit
// Mediante el boton de acceso se lanza un evento con la información introducida por el usuario
// Se tiene que poder personalizar el mensaje
// Se tiene que esconder el input de username // ???

// Personalizar estilos del componente (botones, inputs, etc)
// Opcionalmente permitir que los inputs contengan iconos (personalizar ??? ) 
// Opcionalmente mostrar la imagen/icono del usuario


//**LOCALIZACIÓN */
// Personalizar y localizar el texto del boton de submit
// Se tiene que poder localizar el mensaje
