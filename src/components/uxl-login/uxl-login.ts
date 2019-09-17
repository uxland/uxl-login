
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
import { template } from "./template";

// import {
//   locale,
//   login,
//   store,
//   userErrorDescriptionSelector,
//   userErrorSelector,
//   userIsFetchingSelector
// } from "@uxland/uxl-prism"; -----> Como se importa un módulo?????

@customElement("uxl-login")

export class UxlLogin extends LitElement {

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  
  @property()
  public canDoLogin: boolean;

  @query(".username")
  public userNameInput: any;

  @query(".password")
  public passwordInput: any;

  

  public render() {
    return html`
      ${template(this)}
    `;
  }


//  @listen("click", ".btn-show")
  public mostrarContrasena() {

    if(this.passwordInput.type == "password"){
        this.passwordInput.type = "text";
    }else{
        this.passwordInput.type = "password";
    }
  }
}
