
import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./styles.scss";
import { template } from "./template";
import { listen, isNotNullNeitherEmpty } from "@uxland/uxl-utilities";

@customElement("uxl-login")
export class UxlLogin extends LitElement {

  @property()
  public canSubmit: boolean = false;

  @property()
  public usernamePlaceholder: string = "Default";

  @property()
  public submit: any = () => undefined;

  @query(".username")
  public userNameInput: any;

  @query(".password")
  public passwordInput: any;

  @query(".btn-acceder")
  public btnAcceder: any;

  @listen("keyup", ".username")
  public onKeyUpUsername(){
    console.log("key up");
    this.validateIfCanSubmit();
  }

  @listen("keyup", ".password")
  public onKeyUpPassword(){
    console.log("key up");
    this.validateIfCanSubmit();
  }

  public validateIfCanSubmit(){
    this.canSubmit = this.userNameInput && isNotNullNeitherEmpty(this.userNameInput.value) && this.passwordInput && isNotNullNeitherEmpty(this.passwordInput.value);
    console.log(this.canSubmit);
  }

  @listen("click", ".btn-acceder")
  onClick(){

    //this.shadowRoot.querySelector(".username");
    // let listado = this.shadowRoot.querySelectorAll(".username");
    // let listadoArray = Array.from(listado)

    if(this.canSubmit){
      typeof this.submit == "function" ? this.submit() : undefined;
    }else{
      console.log("no se puede hacer submit porque falta introducir el campo nombre y/o pasword");
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

// function warning(): void {
//   alert("This is my warning message");
//   }