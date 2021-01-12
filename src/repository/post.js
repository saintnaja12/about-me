import base from '../repository/base'

export default {
    getPost(){
        return base.get('posts').then(resp => {
            return resp
        })
    }
}