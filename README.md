# \<uxl-login\>

##### What is?

It is a login component with user and password.

##### How Install

```
npm i @uxland/uxl-login
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
  | `userName` | Username | `null` |
  | `usernamePlaceholder`| Username placeholder | `Usuario` |
  | `passwordPlaceholder` | Password placeholder | `Contraseña`|
  | `footerText` | Footer text | `Texto footer` |
  | `isFooterVisible` | If `true` shows footer text | `true` |
  | `mainImage` | Main image | `null` |
  | `submitButtonText` | Defines the submit button text | `Enviar` |
  | `errorMessage` | Shows error message | `null` |
  | `welcomeMessage` | Welcome message | `Bienvenido` |
  | `displayName` | Display name | `null` |
  | `userImage` |  user image |`null` |
  
### Styling

##### Mixins

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--uxl-login-primary-color` | Buttons and textfield color | `#00897B` |
| `--uxl-login-background-color` | Component background color | `#E0F2F1` |
| `--uxl-login-content-padding` | Padding content element | `0 30%` |


##### Stylable Shadow Parts

The following styleable part's of the element `confirm-component` are available for styling:

| Shadow part name                       | Description                             |
|------------------|------------------|
| `login__container` | Main container | 
| `main__image-container` | main image container |
| `main__image` | main image |
| `user__info ` | user info | 
|`user__info-image `| user info image | 




### Events
