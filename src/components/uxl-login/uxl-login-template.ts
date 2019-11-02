import { html } from "lit-element";
//import { classMap } from "lit-html";
import { UxlLogin } from './uxl-login';
import { iconTemplate } from "./icons/login-icons";
import "@material/mwc-button";
import "@material/mwc-textfield";
import '@material/mwc-icon/mwc-icon-font.js';

export const template = (props:UxlLogin) => html`${iconTemplate()}
<div class="content" part="content">
	<div class="login" part="login">
		<img class="user__image" src="${props.userImgSrc}" part="login__userImage">
		<div class="submit-msg" part="login__submitMsg"
			 ?hidden="${!props.hideUserInput}">
			${props.welcomeMessage}
		</div>
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
					iconTrailing="visibility"
			>
			</mwc-textfield>
		</div>
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
					part="login__btn"
					?hidden="${props.hideUserInput}">
				${props.newUserButton}
			</mwc-button>
			<mwc-button
					raised
					class="btn-showPassword"
					.disabled="${!props.canShow}"
					part="login__btn">
				${props.showPasswordButtonText}
			</mwc-button>
		</div>
		<a class="forgotPass" href="" part="login__forgotPass">${props.forgotPasswordText}</a>
	</form>
</div>
</div>
`;
