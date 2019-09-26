
import { html } from "lit-element";

export const template = (props) => html`


<h2>Login</h2>

<div class="content">
  <div class="login">
    <div class="inputs">
      <div class="inputs__username">
        <input class="username" autofocus autocapitalize="none" type= "email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
      </div>
      <div class="inputs__password">
        <input class="password" type="password"/>
      </div>       
    </div>
  </div>
  <button class= "btn-acceder">location?</button>
</div>

`;