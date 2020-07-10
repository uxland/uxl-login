import {html} from 'lit-element';
import "src/components/uxl-login/uxl-login";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { DemoComponent } from './demo-component';
import "@uxland/uxl-content-switcher";
import {stylesNative} from "./styles-native";

export const template = (props: DemoComponent) => html`
${stylesNative}
<mwc-tab-bar>
	<mwc-tab class="tabOne" label="Sin info usuario"></mwc-tab>
	<mwc-tab class="tabTwo" label="Con mensaje de error"></mwc-tab>
	<mwc-tab class="tabThree" label="Con info usuario"></mwc-tab>
</mwc-tab-bar>
<uxl-content-switcher attrForSelected="name" selected="${props.selected}">

	<div name="tab1">
		<uxl-login
		    class=login1
		    mainImage="https://www.uxland.es/wp-content/uploads/2018/02/uxland_logo_2018-web_cropped-hd.png"
		    footerText="® Todos los derechos reservados"
		    .isTitleVisible="${true}"
		    titleText="Título prueba de la App"
		    >
        </uxl-login>
	</div>
	<div name="tab2">
		<uxl-login
		    class="login2"
			mainImage="https://www.uxland.es/wp-content/uploads/2018/02/uxland_logo_2018-web_cropped-hd.png"
		    footerText="® Todos los derechos reservados"
		    errorMessage="Usuario y/o contraseña incorrecta"
		>
        </uxl-login>
	</div>
    <div name="tab3">
    <uxl-login
           class=login3
           displayName="Ruperta"
           mainImage="https://www.uxland.es/wp-content/uploads/2018/02/uxland_logo_2018-web_cropped-hd.png"
           userImgSrc="https://images.pexels.com/photos/1435612/pexels-photo-1435612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           footerText="® Todos los derechos reservados"
           >
    </uxl-login>
</div>
</uxl-content-switcher>


`;
