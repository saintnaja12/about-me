
const actions = {
    addFood({ commit }, payload){
        console.log(payload)
        commit("ADD_FOOD", {payload})
    },
    delFood({ commit }, index){
        commit("DEL_FOOD", {index})
    },
    editFood({ commit }, payload){
        commit("EDIT_FOOD", {payload})
    }
}

const mutations = {
    ADD_FOOD(state, {payload}){
        state.foods.push(payload)
    },
    DEL_FOOD(state, {index}){
        state.foods.splice(index, 1)
    },
    EDIT_FOOD(state, {payload}){
        state.foods[payload.index] = {name: payload.name, price: payload.price}
    }
}

const state = {
    foods : []
}

const getters = {
    postFoods: state => {
        return state.foods
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}