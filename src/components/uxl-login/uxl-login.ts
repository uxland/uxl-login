
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
    console.log("soy un botón");
  }

  @listen("click",".btn-showPassword")
  onClickPass(){
   // cambiar tipo a string
   
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
