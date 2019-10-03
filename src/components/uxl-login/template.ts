import { html } from "lit-element";
//import { classMap } from "lit-html";
import { UxlLogin } from './uxl-login';
import { iconTemplate } from "./icons/login-icons";
import "@material/mwc-button";
import "@material/mwc-textfield";
import '@material/mwc-icon/mwc-icon-font.js';

export const template = (props:UxlLogin) => html`

${iconTemplate()}

<h2>Login</h2>
<div class="content">
  <div class="login">
    <div class="inputs">
      <div class="inputs__username">        
        <mwc-textfield
          outlined
          icon="${props.userIcon}"
          class="username"
          autofocus
          autocapitalize="none" 
          type= "email" 
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> 
        </mwc-textfield>
    </div>

      <div class="inputs__password">
        <mwc-textfield 
                      outlined
                      class="password" 
                      .type="${props.inputType}"
                      icon="${props.passIcon}"> 
                      
        </mwc-textfield>

      </div>       
    </div>
  </div>

  <mwc-button 
            class="btn-acceder" 
            .disabled="${!props.canSubmit}">
            ${props.loginBtn}
  </mwc-button>


  <mwc-button 
            class="btn-showPassword" 
            .disabled="${!props.canShow}">
            ${props.showPassText}
  </mwc-button>

  <mwc-button 
            class="btn-newUser">
            ${props.newUser} 
  </mwc-button>

  <mwc-button 
            class="btn-forgotPass">
            ${props.forgotPass} 
  </mwc-button>


  <div class="submit-msg">${props.msgSubmit} </div>
  
  

</div>




`;
