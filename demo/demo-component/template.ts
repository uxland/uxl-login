import {html} from 'lit-element';
import "src/components/uxl-login/uxl-login";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { DemoComponent } from './demo-component';
import "@uxland/uxl-content-switcher";

export const template = (props: DemoComponent) => html`
  
  
<mwc-tab-bar>
   
    <mwc-tab class="tabOne" label="Login 1">
    
    </mwc-tab>
        
    <mwc-tab class="tabTwo" label="Login 2">
    
    </mwc-tab>

    <mwc-tab class="tabThree" label="Login 3">
    
    </mwc-tab>
    
</mwc-tab-bar>
    
<uxl-content-switcher attrForSelected="name" selected="${props.selected}">

<div name="tab1">
    <p>tab1</p>
    <uxl-login 
        displayName="prueba">
    </uxl-login>
</div>

<div name="tab2">
    <p>tab2</p>
    <uxl-login></uxl-login>
</div>

<div name="tab3">
    <p>tab3</p>
    <uxl-login></uxl-login>
</div>

</uxl-content-switcher>


`;