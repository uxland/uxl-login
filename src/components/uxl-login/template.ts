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
<div class="content">

  <div class="login">

  <img class="userImg" src="${props.userImgSrc}">

  <h2 class="">${props.userShowedName}</h2> 

    <form action="" method="post" class="login-form">
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

      <mwc-button 
      raised
      class="btn-showPassword" 
      .disabled="${!props.canShow}">
      ${props.showPassText}
      </mwc-button>   
      

        <div class="container">

        <mwc-button 
            raised
            class="btn-acceder" 
            .disabled="${!props.canSubmit}">
            ${props.loginBtnText}
        </mwc-button>

        <mwc-button 
            raised
            class="btn-newUser">
            ${props.newUserButton} 
        </mwc-button>
      </div>
      <a class="forgotPass" href="">${props.forgotPassText}</a>

    </form>

  
  <div class="submit-msg"
      style="${props.showMsgSubmit}">
      ${props.msgSubmit} </div>  
  </div>
  </div>
  </div>
`;
