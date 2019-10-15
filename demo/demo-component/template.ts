import {html} from 'lit-element';
import "src/components/uxl-login/uxl-login";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { DemoComponent } from './demo-component';


export const template = (props: DemoComponent) => html`

<mwc-tab-bar>
<mwc-tab class="tabOne" label="one"></mwc-tab>
<mwc-tab class="tabTwo" label="two"></mwc-tab>
<mwc-tab class="tabThree" label="three"></mwc-tab>
</mwc-tab-bar>



<uxl-content-switcher attrForSelected="name" selected="${props.selected}">
    <div class="modal" .name="${MEDICINES}">
             
    </div>
    
    <div class="modal" .name="${DEVICES}">
 
    </div>
</uxl-content-switcher>





<uxl-login class="login1" hidden>
</uxl-login>

<uxl-login class="login2" hidden>
</uxl-login>

<uxl-login class="login3" hidden>
</uxl-login>

`;