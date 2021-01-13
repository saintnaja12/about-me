import postRepo from '@/repository/post'

// import UserService from '@/repository/post.js'
// const userService = new UserService()

const actions = {
    // async getUser ({commit}) {
    //     const data = await userService.getUser();
    //     commit('SET_USER',data)
    // }

    addPost(payload){
        console.log(payload);
        return postRepo.createPost(payload).then( resp => {
            return resp
        }).catch( err => {
            throw err
        })
  
    }
}

const mutations = {
    // SET_USER(state, data) {
    //     state.user = data
    //     console.log(state.user);
    // }
}

const state = {
    // user: []
}

const getters = {
    // gettersUser : state =>{
    //     return state.user
    // }
}

export default {
    actions,
    mutations,
    state,
    getters
}
