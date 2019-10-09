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
  `userName`: Name of the user

  `displayName`: The complete name of the user

  `userShowedName`: The user name you want to show when submit, could be ``userName`` | ``displayName``

  `userInputPattern`: The pattern for the user Input, could be ``[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`` | ``[A-Za-z]``

  `userInputType`: The required type for the user input, could be ``text`` | ``email``;

  `loginBtnText`: Submit button text

  `showPassText`: Show password button text

  `newUserButton`: New User button text

  `msgSubmit`: Success submit text, message + `userShowedName` will appear

  `msgSubmitError`: Error message if can't login

  `passwordIcon`: Password icon inside password input
  
  `userIcon`: User icon inside user input

  `forgotPassText`: Forgot password link text

  `forgotPassHref` Forgot password HREF

  `userImgSrc`: User image
  
  

### Styling
The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| `--uxl-login-primary-color` | Buttons and textfield color | `#00897B` |
| `--uxl-login-background-color` | Component background color | `#E0F2F1` |


### Events

