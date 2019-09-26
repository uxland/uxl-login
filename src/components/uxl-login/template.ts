
import { html } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { UxlLogin } from './uxl-login';

export const template = (props:UxlLogin) => html`


<h2>Login</h2>

<div class="content">
  <div class="login">
    <div class="inputs">
      <div class="inputs__username">
        <input class="username"
         autofocus
         autocapitalize="none" 
         type= "email" 
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
      </div>
      <div class="inputs__password">
        <input class="password" .type="${props.inputType}"/>
      </div>       
    </div>
  </div>
  <button class="btn-acceder" .disabled="${!props.canSubmit}">Entrar</button>
  <button class="btn-showPassword" .disabled="${!props.canShow}">Mostrar contraseña</button>
</div>

`;