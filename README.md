# \<uxl-login\>

##### What is?

It is a login component with user and password.

##### How Install

```
npm i --save @uxland/uxl-login
```

##### How to use?

import the component and use it in the html with the `uxl-login` tag

```
import "@uxland/uxl-login";

<body>
    <uxl-login></uxl-login>
</body>
```


### Properties
  
  | Property Name | Description | Default value |
  | --------------| ------------|---------------|
  | `userName` | User name | `null` |
  | `usernamePlaceholder`| Username input placeholder | `Usuario` |
  | `passwordPlaceholder` | Password input placeholder | `Contraseña`|
  | `isTitleVisible` | If `true` shows footer text | `false` |
  | `titleText` | Title text | `Titulo App` |
  | `isFooterVisible` | If `true` shows footer text | `true` |
  | `footerText` | Footer text | `Texto footer` |
  | `mainImage` | Main image that appears at the top of the login | `null` |
  | `submitButtonText` | Defines the submit button text | `Enviar` |
  | `errorMessage` | Shows error message when the user or password are not valid | `null` |
  | `welcomeMessage` | Welcome message, appears when you have userName or DisplayName, displays `welcomeMessage`+`UserName`  or  `displayName` | `Bienvenido` |
  | `displayName` | The user's name showed at the Login if exists | `null` |
  | `userImage` |  User image |`null` |

### Styling

 `extraStyles`: This property allow customize styles that will inject like custom styles in component. Allow styling for legacy browsers and this property add compatibility to Safari for example to avoid css custom parts.

##### Mixins

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--uxl-login-primary-color` | Buttons and textfield color | `#00897B` |
| `--uxl-login-background-color` | Component background color | `#E0F2F1` |
| `--uxl-login-content-padding` | Padding content element | `0 30%` |
| `--uxl-login-title-size` | Title font-size | $uxl-units-size-18 |
| `--uxl-login-title-padding` | Title Padding | `5vh 0` |


##### Stylable Shadow Parts

The following styleable part's of the element `confirm-component` are available for styling:

| Shadow part name                       | Description                             |
|------------------|------------------|
| `login__container` | Main container: contains all the login elements|
| `main__image-container` | Contains the main image |
| `main__image` | Main image: Image centered on the top of the login |
| `title`| Title text |
| `user__info ` | User info: Welcome message, image and displayName |
| `user__info-image `| User image |
| `login__form `| Login form: contains the inputs and the submit button |
| `user__info-welcome-message `| Welcome message: appears when there are a userName or displayName |
| `username-container `| Container with the username input|
| `username-input `| Username Input |
| `password-container `| Container with the password input|
| `password-input`| Password input |
| `error__message `| Error message in case the submit info is not valid |
| `submit__container `| Container with the submit button |
| `btn-submit`| Submit button: enabled only when userInput and passwordInput are completed |
| `footer`| Footer text |



### Events

| Event name | Description |
|------------|-------------|
| `submit` | Fired when submit button was clicked and username & password has content |
