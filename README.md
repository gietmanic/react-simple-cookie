
# React Simple Cookie Solution

The react-cookie-solution package offers a seamless solution for managing cookies within React applications. It provides robust functionality for handling session management, state persistence, authentication, and authorization in the browser environment. With secure cookie handling and token management, developers can efficiently manage user data and ensure a smooth browsing experience.
## Features

- Create Cookie
- Get Cookie
- Delet Cookie

## Installation

Install  with npm

```bash
  npm i @gietmanic/react-simple-cookie
```

## Usage/Examples
You Can Use The Functions or the Hook

#### Create Cookie
Function
```javascript

import {CreateCookie} from "@gietmanic/react-simple-cookie"

export default function Home() {
    CreateCookie("NAME","VALUE",Days to Expire)
}

```
Hook
```javascript
import {useCreateCookie} from "@gietmanic/react-simple-cookie"

export default function Home() {
    const creatercookie = useCreateCookie("NAME","VALUE",Days to Expire)
}
```

#### Get Cookie
Function
```javascript

import {getCookie} from "@gietmanic/react-simple-cookie"

export default function Home() {
    const cookie = getCookie("NAME")
    console.log(cookie)
}

```
Hook
```javascript
import {useGetCookie} from "@gietmanic/react-simple-cookie"

export default function Home() {
    const cookie = useGetCookie("NAME")
    console.log(cookie)
}
```

#### Delete Cookie
Function
```javascript

import {deleteCookie} from "@gietmanic/react-simple-cookie"

export default function Home() {
    deleteCookie("NAME")
}

```
Hook
```javascript
import {useGetCookie} from "@gietmanic/react-simple-cookie"

export default function Home() {
    const cookie = deleteCookie("NAME")
}
```

## Roadmap

- Add Secure Cookies

- More Config Options

- Add Cookies Server side


## License

[MIT](https://choosealicense.com/licenses/mit/)
