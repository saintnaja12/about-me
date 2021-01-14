import postRepo from '@/repository/post'

const actions = {
    // addPost(payload){
    //     return postRepo.createPost(payload).then( resp => {
    //         return resp
    //     }).catch( err => {
    //         throw err
    //     })
    // }
    addPost({commit},payload) {
        // console.log(payload);
        postRepo.createPost(payload).then(resp=>{
            console.log(resp);
            commit("ADD_POST", {payload})
        }).catch(err =>{
            throw err
        })
        
    },
}

const mutations = {
    ADD_POST(state, {payload}){
      state.apiPost.push(payload)
    }
}

const state = {
    apiPost: []
}

const getters = {
    apiPost: state => state.apiPost
}

export default {
    actions,
    mutations,
    state,
    getters
}
