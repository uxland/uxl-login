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
  
  `emailPlaceholder`: Email input placeholder text

  `passwordPlaceholder`: Password input placeholder text 
  
  `userShowedName`: The user name you want to show at the login if user exists, could be ``userName`` | ``displayName``

  `userInputPattern`: User Input pattern, could be ``[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`` | ``[A-Za-z]``

  `userInputType`: The required type for the user input, could be ``text`` | ``email``;

  `forgotPasswordText`: Forgot password link text
  
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
  
  `forgotPassHref` Forgot password HREF

  #Images
  
  `userImgSrc`: User's image if has, if not, default image is shown

  
  

### Styling
The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--uxl-login-primary-color` | Buttons and textfield color | `#00897B` |
| `--uxl-login-background-color` | Component background color | `#E0F2F1` |


### Events

