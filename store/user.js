export const state = () => ({
    authenticated: false,
    user: {}
})

export const actions = {
    updateAuthStatus: ({ commit }, status) => {
        commit('UPDATE_AUTH_STATUS', status)
    },
    updateUser: ({ commit }, user) => {
        commit('UPDATE_USER', user)
    }
}

export const mutations = {
    UPDATE_AUTH_STATUS: (state, data) => {
        state.authenticated = data
    },
    UPDATE_USER: (state, data) => {
        state.user = data
    }
}