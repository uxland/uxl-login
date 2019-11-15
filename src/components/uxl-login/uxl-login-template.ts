import { html } from "lit-element";
import { UxlLogin } from "./uxl-login";
import { iconTemplate } from "./icons/login-icons";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-button/paper-button.js";
import { nothing } from 'lit-html';
import {uxlLoginStylesNative} from "./uxl-login-styles-native";

export const template = (props: UxlLogin) => html`${iconTemplate()}${uxlLoginStylesNative}
<div class="login__container" part="login__container">
	${ props.mainImage ? html `
		<div class="main__image-container" part="main__image-container">
			<img src="${props.mainImage}" class="main__image" part="main__image">
		</div>
	` : nothing}
	${props.displayName || props.userImage ? html `
		<div class="user__info" part="user__info">
			${props.userImage ?
				html `<img class="user__info-image" src="${props.userImage}" part="user__info-image">` : 
			nothing}
			${props.displayName ? html `
				<div class="user__info-welcome-message" part="user__info-welcome-message">${props.welcomeMessage} ${props.displayName}</div>
			` : nothing}
		</div>
	` : nothing}
	<form class="login__form" part="login__form">
		<div class="username-container" part="username-container">
			<paper-input class="username-input" label=${props.usernamePlaceholder} always-float-label part="username-input"></paper-input>
		</div>
		<div class="password-container" part="password-container">
			<paper-input class="password-input" type="password" label=${props.passwordPlaceholder} always-float-label part="password-input"></paper-input>
		</div>
		${props.errorMessage ? html `
			<div class="error__message" part="error__message">${props.errorMessage}</div>
		` : nothing}
		<div class="submit__container" part="submit__container">
			<paper-button class="btn-submit" .disabled="${!props.canSubmit}" part="btn-submit">${props.submitButtonText}</paper-button>
		</div>
	</form>
	${props.isFooterVisible ? html `
		<footer class="footer" part="footer">${props.footerText}</footer>
	` : nothing}
</div>
`;
