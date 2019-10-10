import { html } from "lit-element";
//import { classMap } from "lit-html";
import { UxlLogin } from './uxl-login';
import { iconTemplate } from "./icons/login-icons";
import "@material/mwc-button";
import "@material/mwc-textfield";
import '@material/mwc-icon/mwc-icon-font.js';

export const template = (props:UxlLogin) => html`
${iconTemplate()}
<div class="content">

  <div class="login" part="login">

    <img class="userImg" src="${props.userImgSrc}"part="login__userImage">

    <h2 class="" part="login__username">${props.userShowedName}</h2> 

    <form action="" method="" class="login-form">
      <div class="inputs__username" part="login__inputUsername">        
          <mwc-textfield     
              filled  
              icon="${props.userIcon}"
              class="username"
              ?hidden="${props.userInputIsHidden}"
              autofocus
              autocapitalize="none" 
              type="${props.userInputType}"      
              pattern="${props.userInputPattern}">
              part="login__textfield"
          </mwc-textfield>
      </div>

      <div class="inputs__password" part="login__inputPassword">

        <mwc-textfield 
            filled
            class="password" 
            .type="${props.inputType}"
            icon="${props.passwordIcon}">   
            part="login__textfield"                    
        </mwc-textfield>

      </div>   

      <mwc-button 
      raised
      class="btn-showPassword" 
      .disabled="${!props.canShow}"
      part="login__btn">
      ${props.showPassText}
      </mwc-button>   
      

      <div class="container">
        <mwc-button 
            raised
            class="btn-acceder" 
            .disabled="${!props.canSubmit}"
            part="login__btn">
            ${props.loginBtnText}
        </mwc-button>

        <mwc-button 
            raised
            class="btn-newUser"
            part="login__btn">
            ${props.newUserButton} 
        </mwc-button>
      </div>
    
      <a class="forgotPass" href="" part="login__forgotPass">${props.forgotPassText}</a>

    </form>

    <div class="submit-msg" part="login__submitMsg"
        style="${props.showMsgSubmit}">
        ${props.msgSubmit} </div>  
    </div>

  </div>

</div>
`;
