import { css, customElement, html, LitElement, property, query, unsafeCSS } from "lit-element";
import styles from './styles.scss';
import { template } from './template';
import { listen} from "@uxland/uxl-utilities";



@customElement('demo-component')
export class DemoComponent extends LitElement {

  //----------- PROPERTIES
  @property()
  public selected:string = "tab1";

  //----------- QUERIES

  @query(".login1")
  public login1: any;

  @query(".login2")
  public login2: any;

  @query(".login3")
  public login3: any;

  @listen("click",".tabOne")
  onClickTab1(){
    this.selected = "tab1";
   }

   
  @listen("click",".tabTwo")
  onClickTab2(){
    this.selected = "tab2";
   }


   @listen("click",".tabThree")
   onClickTab3(){
     this.selected = "tab3";
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
