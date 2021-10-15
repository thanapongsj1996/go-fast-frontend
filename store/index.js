import Cookies from 'js-cookie'

export const actions = {
    async nuxtClientInit({ dispatch }, context) {
        const user = await Cookies.get('user_profile')
        const token = await Cookies.get('token')

        if (user === '' || token === '') {
            dispatch('user/updateAuthStatus', false)
            return
        }

        if (user !== '' && token !== '') {
            // dispatch('user/updateAuthStatus', true)
            dispatch('user/updateUser', JSON.parse(user))
        }
    }
}