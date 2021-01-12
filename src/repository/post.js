import base from '../repository/base'

// export default {
//     getPost(){
//         return base.get('posts').then(resp => {
//             return resp
//         })
//     }
// }

class UserProvider extends base {
  constructor () {
    // api api
    super('https://jsonplaceholder.typicode.com/')
  }

  async getUser () {
    // example path https://jsonplaceholder.typicode.com//
    const {data} = await this.get('/users')
    return data
  }
}

export default UserProvider