
import { html } from "lit-element";

export const template = (props) => html`

<div class="login">

    <div class="inputs">

        <div class="inputs__username">
            <input
                class="username"
                autofocus
                autocapitalize="none"
                placeholder="" />
        </div>

   
        <div class="inputs__password">
            <input
                class="password"
                type="password"
                placeholder="" />
        </div>
    </div>
         
            <button
            class="btn-show"
            type="button"
            >Ver</button>
      
     
        <button>Entrar</button>
        
    </div>

</div>
`;

