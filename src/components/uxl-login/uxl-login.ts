import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
//import styles from "./styles.scss";
import { template } from "./template";

@customElement("uxl-login")
export class UxlLogin extends LitElement {

  public render() {
    return html`

    <h2>Login</h2>

    <div class="content">
      <div class="login">
        <div class="inputs">
          <div class="inputs__username">
            <input
              class="username"
              autofocus
              autocapitalize="none"
              />
          </div>
          <div class="inputs__password">
            <input
              class="password"
              type="password"/>
          </div>       
        </div>
      </div>
    </div>

    `;
  }

}
