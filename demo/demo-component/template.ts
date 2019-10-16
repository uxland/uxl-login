import {html} from 'lit-element';
import "src/components/uxl-login/uxl-login";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { DemoComponent } from './demo-component';


export const template = (props: DemoComponent) => html`


<uxl-content-switcher attrForSelected="name" selected="${props.selected}">
    <mwc-tab-bar>
   
        <mwc-tab class="tabOne" .name="" label="one">
        
        </mwc-tab>
            
        <mwc-tab class="tabTwo" .name="" label="two">
        
        </mwc-tab>

        <mwc-tab class="tabThree" .name="" label="three">
    
    </mwc-tab>

    
</uxl-content-switcher>


`;