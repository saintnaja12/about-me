const action = {
    addFood({ commit }, payload){
        commit("ADD_FOOD", {payload})
    }
}

const mutations = {
    ADD_FOOD(state, {payload}){
        state.foods.push(payload)
    }
}

const state = {
    foods : []
}

const getters = {
    foods: state => {
        return state.foods
    }
}

export default {
    action,
    mutations,
    state,
    getters
}