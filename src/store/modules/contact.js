const actions = {
    getContact({ commit }, payload){
        commit('GET_CONTACT', payload)
    }
}

const mutations = {
    GET_CONTACT(payload){
        // console.log(state.form == payload);
        state.form.push(payload)
    }
}

const state = {
    form: {},
}

const getters = {
    getContactState: state => {
        return state.form
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}
