
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
import { template } from "./template";
import { listen, isNotNullNeitherEmpty } from "@uxland/uxl-utilities";


@customElement("uxl-login")

export class UxlLogin extends LitElement {
  @property()
  public userName: string = "";

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
  public inputType: string = "password";

  @property()
  public loginBtnText: string = "Iniciar sesión";

  @property()
  public showPassText: string = "Ver";

  @property()
  public msgSubmit: string = "Welcome";

  @property()
  public showMsgSubmit: string = "display:none";

  @property()
  public msgSubmitError: string = "Mensaje de Error";

  @property()
  public newUserButton: string="Nuevo usuario";

  @property()
  public passwordIcon: string="";

  @property()
  public userIcon: string="";

  @property()
  public UserInputIsHidden: string="";

  @property()
  public forgotPassText:string="¿Ha olvidado la contraseña?"

  @property()
  public forgotPassHref:string=""

  @property()
  public userImgSrc:string="";
  
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

    this.datosUsuario(this.userNameInput.value,this.passwordInput.value);

    if(!this.canSubmit){

      this.msgSubmit = this.msgSubmitError;
    
    }else{
    
      if(this.displayName){
        this.showMsgSubmit="";
        this.msgSubmit += " " + this.displayName + "!"; 
        
      }else if(this.userName){
        this.showMsgSubmit="";
        this.msgSubmit += " " + this.userName + "!"; 

      }else{    
        this.showMsgSubmit="";   
        this.msgSubmit += " " + this.userNameInput.value + "!"; 
      }
    }
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
  public userCanSubmit(){

    if(this.displayName){
      this.canSubmit = this.passwordInput 
                      && isNotNullNeitherEmpty(this.passwordInput.value);
   
    }else if(this.userName){
      this.canSubmit = this.passwordInput 
                      && isNotNullNeitherEmpty(this.passwordInput.value);

    }else{
      this.canSubmit = this.userNameInput 
                      && isNotNullNeitherEmpty(this.userNameInput.value) 
                      && this.passwordInput 
                      && isNotNullNeitherEmpty(this.passwordInput.value);            
    }       
  }

  public showPassword(){
    this.canShow = this.passwordInput 
                   && isNotNullNeitherEmpty(this.passwordInput.value);
  }

  public changePasswordType(){
 
    if(this.inputType==="password"){

      this.inputType="text";
      this.showPassText="Ocultar";

    }else{
      this.inputType="password";
      this.showPassText="Ver";
    }
  }

  public datosUsuario(email,password){

  }

  public hideUserShowName(){

    if(this.displayName){
      this.userShowedName=this.displayName;
    }else{
      this.userShowedName=this.userName;
    }

    if((this.displayName !== "") || ( this.userName!=="")){
      this.UserInputIsHidden="display:none";
    }else{     
      this.userInputType=""; 
    }

    if(this.userImgSrc===""){
      this.userImgSrc="/src/components/uxl-login/icons/user.svg";
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


