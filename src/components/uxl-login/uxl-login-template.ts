import { html } from "lit-element";
//import { classMap } from "lit-html";
import { UxlLogin } from './uxl-login';
import { iconTemplate } from "./icons/login-icons";
import "@material/mwc-button";
import "@material/mwc-textfield";

export const template = (props:UxlLogin) => html`
${iconTemplate()}
<div class="content">

  <div class="login" part="login">

    <img class="userImg" src="${props.userImgSrc}" part="login__userImage">
    
      <div class="submit-msg" part="login__submitMsg">
      ${props.welcomeMessage} </div>  
      </div>


    <form class="login-form">
      <div class="inputs__username" part="login__inputUsername">        
          <mwc-textfield     
              filled  
              icon="${props.userIcon}"
              label="${props.emailPlaceholder}"
              class="username"
              ?hidden="${props.hideUserInput}"
              autofocus
              autocapitalize="none" 
              type="${props.userInputType}"      
              pattern="${props.userInputPattern}"
              part="login__textfield">
          </mwc-textfield>
      </div>

        

      <div class="mdc-text-field--with-leading-icon" part="login__inputPassword">

        <mwc-textfield      
            
            class="password" 
            label="${props.passwordPlaceholder}"
            type="${props.passwordInputType}"
            icon="${props.passwordIcon}"   
            part="login__textfield"
            iconTrailing="">     
                           
        </mwc-textfield>

      </div>   

      <mwc-button 
      raised
      class="btn-showPassword" 
      .disabled="${!props.canShow}"
      part="login__btn">
      ${props.showPasswordButtonText}
      </mwc-button>   
      

      <div class="container">
        <mwc-button 
            raised
            class="btn-acceder" 
            .disabled="${!props.canSubmit}"
            part="login__btn">
            ${props.loginButtonText}
        </mwc-button>

        <mwc-button 
            raised
            class="btn-newUser"
            part="login__btn">
            ${props.newUserButton} 
        </mwc-button>
      </div>
    
      <a class="forgotPass" href="" part="login__forgotPass">${props.forgotPasswordText}</a>

    </form>

  </div>

</div>
`;

//export const template = props => guard(props.items, () => getSkeletonTemplate(props));???