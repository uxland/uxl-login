
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
import { template } from "./template";

@customElement("uxl-login")

export class UxlLogin extends LitElement {

  @query(".username")
  public userNameInput: any;

  @query(".password")
  public passwordInput: any;

  @query(".btn-acceder")
  public btnAcceder: any;


   static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  public render() {

    warning();
    
  
    return html`
      ${template(this)}
    `;
  }



}


function warning(): void {
  alert("This is my warning message");
  }