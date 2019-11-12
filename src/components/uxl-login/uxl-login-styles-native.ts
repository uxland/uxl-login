import {html} from "lit-element/lit-element";

export const uxlLoginStylesNative = html`
<custom-style>
	<style>
		:host {
			--paper-button: {
				background-color: var(--uxl-login-button-background, #4C8F64);
				padding: 14px 32px;
				color: var(--uxl-login-button-color, white);
				font-size: 16px;
			};
			--paper-button-disabled: {
			background-color:  var(--uxl-login-button-background-disabled, #4C8F64);
			color: var(--uxl-login-button-color-disabled, white);
			}
		}
	</style>
</custom-style>
`;
