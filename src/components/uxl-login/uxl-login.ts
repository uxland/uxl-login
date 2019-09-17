
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
import { template } from "./template";

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

}
