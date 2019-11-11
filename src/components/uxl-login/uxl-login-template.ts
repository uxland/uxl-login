import { html } from "lit-element";
import { UxlLogin } from "./uxl-login";
import { iconTemplate } from "./icons/login-icons";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-button/paper-button.js";
import { nothing } from 'lit-html';

export const template = (props: UxlLogin) => html`${iconTemplate()}
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
			<paper-input class="username" label=${props.usernamePlaceholder} always-float-label></paper-input>
		</div>
		<div class="mdc-text-field--with-leading-icon" part="login__inputPassword">
			<paper-input class="password" type="password" label=${props.passwordPlaceholder} always-float-label>
				<paper-icon-button slot="suffix" icon="eye"></paper-icon-button>
			</paper-input>

		</div>
		<div class="container">
			<paper-button class="btn-submit" .disabled="${!props.canSubmit}" part="login__btn">${props.loginButtonText}</paper-button>
		${props.showNewUser ? html `
			<paper-button class="btn-newUser" .disabled="${!props.canSubmit}" part="login__btn">${props.hideUserInput}</paper-button>
		` : nothing}
			${props.showCanShowButton ? html `
				<paper-button class="btn-showPassword" .disabled="${!props.canShow}" part="login__btn">${props.showPasswordButtonText}</paper-button>

			` : nothing}
		</div>
		${props.showForgotPassword ? html `
			<a class="forgotPass" href="" part="login__forgotPass">${props.forgotPasswordText}</a>
		` : nothing}
	</form>
	<footer>${props.footerText}</footer>
</div>
</div>
`;
