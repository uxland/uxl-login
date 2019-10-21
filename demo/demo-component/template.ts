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

    <!--<mwc-tab class="tabThree" label="Login 3">
    
    </mwc-tab>-->
    
</mwc-tab-bar>
    
<uxl-content-switcher attrForSelected="name" selected="${props.selected}">

<div name="tab1">

    <uxl-login login1
        userName="Usuario 1">

        <style>
            
        uxl-login::part(content){
            background-color:grey;
        }     

        </style>
        
    </uxl-login>

</div>


<div name="tab2">

    <uxl-login></uxl-login>

</div>

<div name="tab3">

    <uxl-login></uxl-login>

</div>

</uxl-content-switcher>


`;