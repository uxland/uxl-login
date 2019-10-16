
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./uxl-login-styles.scss";
import { template } from "./uxl-login-template";
import { listen, isNotNullNeitherEmpty } from "@uxland/uxl-utilities";
import { defaultOptions } from 'src/utilities';

@customElement("uxl-login")

export class UxlLogin extends LitElement {

//----------- PROPERTIES
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
  public canSubmit: boolean;

  @property()
  public userInputPattern: string; 
  //email --> [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
  // text --> [A-Za-z]

  @property()
  public userInputType: any;
  //email
  //text

  @property()
  public canShow: boolean = false;

  @property()
  public passwordInputType: any;

  @property()
  public loginButtonText: string;

  @property()
  public showPasswordButtonText: string = "Ver";

  @property()
  public welcomeMessage: string;

  @property()
  public submitErrorMessage: string;

  @property()
  public newUserButton: string;

  @property()
  public passwordIcon: string="";

  @property()
  public userIcon: string="";

  @property()
  public hideUserInput: boolean=false;

  @property()
  public showWelcomeMessage: boolean=false;

  @property()
  public forgotPasswordText:string;

  @property()
  public forgotPasswordHref:string;

  @property()
  public userImgSrc:string;

  //----------- QUERIES

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
    
     this.welcomeMessage = this.submitErrorMessage;
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
 
    if(this.passwordInputType === "password"){
      this.passwordInputType = "text";
      this.showPasswordButtonText = "Ocultar";

    }else{
      this.passwordInputType = "password";
      this.showPasswordButtonText = "Ver";
    }
  }

  public handleShowUsername(){

    this.userShowedName = this.displayName ? this.displayName : this.userName;

    if(this.displayName || this.userName){
      this.hideUserInput = true;
      this.showWelcomeMessage = true;

    }else{     

      this.hideUserInput = false;
    }

    this.defaultUserImage();
    this.showDisplayNameOrUsername();
   
}

  public defaultUserImage(){

    if(!this.userImgSrc){
      this.userImgSrc ="/src/components/uxl-login/icons/user.svg";
    }
  }

  public showDisplayNameOrUsername(){

    if(this.displayName){
          
      this.welcomeMessage += " " + this.displayName + "!"; 
      
    }else if(this.userName){

      this.welcomeMessage += " " + this.userName + "!"; 

    }else{    
    
      this.welcomeMessage += " " + this.userNameInput.value + "!"; 
    }

  }

  public myDefaultOptions(){

    this.loginButtonText = defaultOptions.submitButtonText;
    this.submitErrorMessage = defaultOptions.errorMessage;
    this.welcomeMessage = defaultOptions.welcomeMessage;
    this.displayName = defaultOptions.displayName;
    this.showPasswordButtonText = defaultOptions.showPasswordButtonText;
    this.newUserButton = defaultOptions.newUserButton;
    this.passwordIcon = defaultOptions.passwordIcon;
    this.userIcon = defaultOptions.userIcon;
    this.emailPlaceholder = defaultOptions.emailPlaceholder;
    this.passwordPlaceholder = defaultOptions.passwordPlaceholder;
    this.passwordInputType = defaultOptions.passwordInputType;
    this.forgotPasswordText = defaultOptions.forgotPasswordText;

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


