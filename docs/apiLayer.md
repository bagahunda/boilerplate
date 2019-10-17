# Working with the API

Configuration is placed in the src/services/api/apiInit.js.

For each endpoint we create separate file where we define all operations. For example, we have endpoint `/users`. So we create file usersEndpoints.js

```js
import api from './apiInit'

const resource = '/users'
export default {
  get() {
    return api.get(`${resource}`)
  },

  getUser(userId) {
    return api.get(`${resource}/${userId}`)
  },

  createUser(payload) {
    return api.post(`${resource}`, payload)
  },
}
```

And to use all endpoints files we have simple factory apiFactory.js

```js
import usersEndpoint from './usersEndpoint'

const endpoints = {
  users: usersEndpoint,
  // other endpoints ...
}

export const apiFactory = {
  get: (name) => endpoints[name],
}
```

And this is the way we use at all in component:

```js
import { apiFactory } from '@/services/api/apiFactory'

const usersFactory = apiFactory.get('users')

export default {
  data() {
    return {
      users: [],
    }
  },

  created() {
    this.getUsers()
  },

  methods: {
    async getUsers() {
      const { data } = await usersFactory.get()
      this.users = data
    },
  },
}
```
