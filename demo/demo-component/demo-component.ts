import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from './styles.scss';
import { template } from './template';
import { listen, isNotNullNeitherEmpty } from "@uxland/uxl-utilities";
import { UxlLogin } from 'src';


@customElement('demo-component')
export class DemoComponent extends LitElement {
     
  @query(".login1")
  public login1: any;

  @query(".login2")
  public login2: any;

  @query(".login3")
  public login3: any;



  @listen("click",".tabOne")
  onClickTab1(){
  console.log("tab1");
  this.login1.removeAttribute("hidden");
  this.login2.addAttribute("hidden");
  }

  @listen("click",".tabTwo")
  onClickTab2(){
  console.log("tab2");
  this.login1.addAttribute("hidden");
  this.login2.removeAttribute("hidden");

  }

  
  render() {
    return html`
      ${template(this)}
    `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
