import Axios from "axios"

export default {
    state: {
        category: [],
    },
    getters: {
        getCategory(state) {
            return state.category
        }
    },
    mutations: {
        categories(state, data) {
            return state.category = data
        }
    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response) => {
                    context.commit('categories', response.data.categories)
                })
        }
    }
}