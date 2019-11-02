import {html} from 'lit-element';
import "src/components/uxl-login/uxl-login";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { DemoComponent } from './demo-component';
import "@uxland/uxl-content-switcher";

export const template = (props: DemoComponent) => html`
<mwc-tab-bar>
	<mwc-tab class="tabOne" label="Con info usuario"></mwc-tab>
	<mwc-tab class="tabTwo" label="Sin info usuario"></mwc-tab>
	<!--<mwc-tab class="tabThree" label="Login 3"></mwc-tab>-->
</mwc-tab-bar>
<uxl-content-switcher attrForSelected="name" selected="${props.selected}">
	
	<div name="tab1">
		
		<uxl-login class=login1
				   userName="Usuario 1"
				   userImgSrc="https://images.pexels.com/photos/1435612/pexels-photo-1435612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
		</uxl-login>
	
	</div>
	
	
	<div name="tab2">
		
		<uxl-login class=login2>
			<style>
				
				uxl-login.login2::part(content) {
					background-color: #e8eaf6;
					font-family: "Times New Roman", Times, serif;
					
				}
				
				uxl-login.login2::part(login__btn) {
					--mdc-theme-primary: var(--uxl-login-primary-color, orange);
					
				}
				
				uxl-login.login2::part(login__textfield) {
					--mdc-theme-primary: var(--uxl-login-primary-color, orange);
					
				}
			
			
			</style>
		
		
		</uxl-login>
	
	</div>
	
	<div name="tab3">
		
		<uxl-login></uxl-login>
	
	</div>

</uxl-content-switcher>


`;
