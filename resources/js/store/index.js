import Axios from "axios"

export default {
    state: {
        category: [],
        post: [],
    },
    getters: {
        getCategory(state) {
            return state.category
        },

        getPost(state) {
            return state.post
        }
    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },

        posts(state, data) {
            return state.post = data
        }
    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response) => {
                    context.commit('categories', response.data.categories)
                })
        },

        allPost(context) {
            axios.get('/post')
                .then((response) => {
                    context.commit('posts', response.data.posts)
                })
        }
    }
}