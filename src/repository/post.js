import base from '../repository/base'

export default {
    getPost(){
        return base.get('/posts/').then(resp => {
            // console.log(resp.data);
            return resp
        })
    },
    createPost(data){
        return base.post('posts', data).then(resp => {
            console.log(resp);
            return resp
        })
    }
}
