import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./uxl-login-styles.scss";
import { template } from "./uxl-login-template";
import { listen, isNotNullNeitherEmpty } from "@uxland/uxl-utilities";
import { defaultOptions } from '../../utilities';

@customElement("uxl-login")
export class UxlLogin extends LitElement {

//----------- PROPERTIES
  @property()
  public userName: string= defaultOptions.userName;

  @property()
  public usernamePlaceholder: string = defaultOptions.usernamePlaceholder;

  @property()
  public passwordPlaceholder: any = defaultOptions.passwordPlaceholder;

  @property()
  public displayName: string = defaultOptions.displayName;

  @property()
  public showNewUser: boolean = false;

  @property()
  public showCanShowButton: boolean = false

  @property()
  public showForgotPassword: boolean = false;

  @property()
  public userShowedName: string;

  @property()
  public footerText: string = defaultOptions.footerText;

  @property()
  public canSubmit: boolean;

  @property()
  public userInputPattern: string;

  @property()
  public userInputType: any;
  //email
  //text

  @property()
  public canShow: boolean = false;

  @property()
  public passwordInputType: any = "password";

  @property()
  public loginButtonText: string = defaultOptions.submitButtonText;

  @property()
  public showPasswordButtonText: string = defaultOptions.showPasswordButtonText;

  @property()
  public welcomeMessage: string = defaultOptions.welcomeMessage;

  @property()
  public submitErrorMessage: string = defaultOptions.errorMessage;

  @property()
  public newUserButton: string = defaultOptions.newUserButton;

  @property()
  public passwordIcon: string="";

  @property()
  public userIcon: string="";

  @property()
  public hideUserInput: boolean=false;

  @property()
  public showWelcomeMessage: boolean=false;

  @property()
  public forgotPasswordText:string = defaultOptions.forgotPasswordText;

  @property()
  public forgotPasswordHref:string;

  @property()
  public userImgSrc:string;

  //----------- QUERIES

  @query(".username")
  public userNameInput: any;

  @query(".password")
  public passwordInput: any;

  @query(".btn-submit")
  public submitButton: any;

  @query(".btn-showPassword")
  public showPasswordButton: any;

  firstUpdated(){
    this.handleShowUsername();
  }

  @listen("click",".btn-submit")
  onClickEnter(){

    if(this.canSubmit){

        let userInfo = new CustomEvent('my-event', {
          detail: {
            user: this.userNameInput.value,
            password: this.passwordInput.value,
            username: this.userName,
            displayName: this.displayName
          }
        });
        this.dispatchEvent(userInfo);
      
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

  static get styles() {
    return css`${unsafeCSS(styles)}`;
  }

  public render() {
 
    return html`
    
      ${template(this)}
      
    `;
  }
  
}


