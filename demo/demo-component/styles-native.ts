import {html} from "lit-element/lit-element";

export const stylesNative = html`
<custom-style>
	<style>
		.login2::part(login__textfield) { {
    --paper-input-container: {
      color: red;
    };
    --paper-input-container-input-color: red;
		}
	</style>
</custom-style>
`;
