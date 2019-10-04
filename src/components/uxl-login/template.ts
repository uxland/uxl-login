import { html } from "lit-element";
//import { classMap } from "lit-html";
import { UxlLogin } from './uxl-login';
import { iconTemplate } from "./icons/login-icons";
import "@material/mwc-button";
import "@material/mwc-textfield";
import '@material/mwc-icon/mwc-icon-font.js';

export const template = (props:UxlLogin) => html`

<script>
		window.onload=${props.hideUserShowName()} 
</script>

${iconTemplate()}

<h2>Login</h2>
<div class="content">
  <div class="login">

  <img class="userImg" src="${props.userImgSrc}">

  <h2 class="">${props.userShowedName}</h2> 

    <div class="inputs">
      <div class="inputs__username">        
        <mwc-textfield
            outlined
            icon="${props.userIcon}"
            class="username"
            style="${props.UserInputIsHidden}"
            autofocus
            autocapitalize="none" 
            type="${props.userInputType}"      
            pattern="${props.userInputPattern}">
        </mwc-textfield>
    </div>

      <div class="inputs__password">
        <mwc-textfield 
            outlined
            class="password" 
            .type="${props.inputType}"
            icon="${props.passwordIcon}">                       
        </mwc-textfield>
      </div>       
    </div>
  </div>

  <mwc-button 
      class="btn-acceder" 
      .disabled="${!props.canSubmit}">
      ${props.loginBtnText}
  </mwc-button>


  <mwc-button 
      class="btn-showPassword" 
      .disabled="${!props.canShow}">
      ${props.showPassText}
  </mwc-button>

  <mwc-button 
      class="btn-newUser">
      ${props.newUserButton} 
  </mwc-button>

  <mwc-button 
      class="btn-forgotPass">
      <a href="${props.forgotPassHref}">${props.forgotPassText}</a>
        
  </mwc-button>

  <div class="submit-msg"
      style="${props.showMsgSubmit}">
      ${props.msgSubmit} </div>  
  </div>

`;
