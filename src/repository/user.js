import base from '../repository/base'

export default {
    getUser(){
        //https://jsonplaceholder.typicode.com/users + 'users'
        return base.get('users').then(resp => {
            return resp
        })
    },
}