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
  
  #Texts
  
  `userName`: User's name

  `displayName`: Complete user's name
  
  `usernamePlaceholder`: Username input placeholder text

  `passwordPlaceholder`: Password input placeholder text 
  
  `userShowedName`: The user name you want to show at the login if user exists, could be ``userName`` | ``displayName``

  `userInputPattern`: User Input pattern, could be ``[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`` | ``[A-Za-z]``

  `userInputType`: The required type for the user input, could be ``text`` | ``email``;

  `forgotPasswordText`: Forgot password link text

  `showNewUser`: Defines if it should be shown the new user button. Default `false`

  `showCanShowButton`: Defines if it should be shown the can sow button. Default `false`

  `showForgotPassword`: Defines if it should be whown the forgot password label. Default `false``

  `footerText`: Text of the footer. Type `string`
  
  #Buttons
  
  `submitButtonText`: "Submit" button text

  `showPasswordButtonText`: "Show password" button text

  `newUserButton`: "New User" button text

  #Messages
  
  `welcomeMessage`: Welcome text, message + `userShowedName`

  `errorMessage`: Error message if can't login

  #Icons
  
  `passwordIcon`: Password icon inside password input
  
  `userIcon`: User icon inside user input

  #HREF
  
  `forgotPasswordHref` Forgot password HREF

  #Images
  
  `userImgSrc`: User's image if has, if not, default image is shown

  
  

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

| Shadow tree part                       | Description                             | Style outside of shadow tree             |
| -------------------------------------- | --------------------------------------- | ---------------------------------------- |
| `<paper-dialog part="dialog">...`      | The confirm dialog parent element       | `confirm-component::part(dialog) {...}`  |
| `<div id="header" part="header">...`   | The header of the confirm dialog        | `confirm-component::part(header) {...}`  |
| `<h2 part="title">...`                 | The title of the confirm dialog         | `confirm-component::part(title) {...}`   |
| `<div id="content" part="content">...` | The content of the confirm dialog       | `confirm-component::part(content) {...}` |
| `<div id="actions" part="actions">...` | The action footer of the confirm dialog | `confirm-component::part(actions) {...}` |


### Events

