import Cookies from 'js-cookie'

export const actions = {
    async nuxtClientInit({ dispatch }, context) {
        await Cookies.set('user_profile', JSON.stringify({ firstName: 'Boy' }))
        await Cookies.set('token', JSON.stringify("asdalsdmdsfkjsdfnskjdn"))

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