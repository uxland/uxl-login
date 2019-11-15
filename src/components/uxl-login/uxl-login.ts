import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from "./uxl-login-styles.scss";
import { template } from "./uxl-login-template";
import { listen } from "@uxland/uxl-utilities";
import { defaultOptions } from '../../utilities';

@customElement("uxl-login")
export class UxlLogin extends LitElement {

  @property()
  public userName: string= defaultOptions.userName;

  @property()
  public usernamePlaceholder: string = defaultOptions.usernamePlaceholder;

  @property()
  public passwordPlaceholder: any = defaultOptions.passwordPlaceholder;

  @property()
  public footerText: string = defaultOptions.footerText;

  @property()
  public isFooterVisible: boolean = true;

  @property()
  public mainImage: string;

  @property()
  public canSubmit: boolean;

  @property()
  public submitButtonText: string = defaultOptions.submitButtonText

  @property()
  public errorMessage: string;

  @property()
  public welcomeMessage: string = defaultOptions.welcomeMessage;

  @property()
  public displayName: string;

  @property()
  public userImage:string;

  @query(".username-input")
  public userNameInput: any;

  @query(".password-input")
  public passwordInput: any;

  @query(".btn-submit")
  public submitButton: any;

  @listen("click",".btn-submit")
  onClickEnter(){
    if(this.canSubmit){
        let userInfo = new CustomEvent('submit', {
          detail: {
            user: this.userNameInput.value,
            password: this.passwordInput.value,
            username: this.userName,
            displayName: this.displayName
          }
        });
        this.dispatchEvent(userInfo);
    }
  }

  @listen("keyup", ".password-input")
  public onKeyUpPass(e){
    this.keyUpEnter(e)
  }

  @listen("keyup",".username-input")
  public onKeyUpUser(e){
    this.keyUpEnter(e)
  }

  keyUpEnter(e){
    this.userCanSubmit();
    if(e && e.key == "Enter"){
      this.onClickEnter();
    }
  }

  public userCanSubmit(){
    this.canSubmit = this.userNameInput && this.userNameInput.value && this.passwordInput && this.passwordInput.value;
  }

  static get styles() {
    return css`${unsafeCSS(styles)}`;
  }

  public render() {
    return html`${template(this)}`;
  }
}