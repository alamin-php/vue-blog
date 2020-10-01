import Axios from "axios"

export default {
    state: {
        category: [],
        post: [],
        blogpost: [],
    },
    getters: {
        getCategory(state) {
            return state.category
        },

        getPost(state) {
            return state.post
        },

        getblogpost(state) {
            return state.blogpost
        }
    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },

        posts(state, data) {
            return state.post = data
        },

        getblogpost(state, data) {
            return state.blogpost = data
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
        },

        getblogpost(context) {
            axios.get('/blogpost')
                .then((response) => {
                    context.commit('getblogpost', response.data.posts)
                })
        }
    }
}