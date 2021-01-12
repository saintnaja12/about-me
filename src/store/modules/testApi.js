
import UserService from '@/repository/post.js'
const userService = new UserService()

const actions = {
    async getUser ({commit}) {
        const data = await userService.getUser();
        commit('SET_USER',data)
    }
}

const mutations = {
    SET_USER(state, data) {
        console.log(data);
        state.user = data
    }
}

const state = {
    user: {}
}

const getters = {

}

export default {
    actions,
    mutations,
    state,
    getters
}
