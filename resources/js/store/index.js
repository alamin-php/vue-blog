import Axios from "axios"

export default {
    state: {
        category: [],
        post: [],
        blogpost: [],
        singlepost: [],
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
        },

        singlepost(state) {
            return state.singlepost
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
        },

        singlepost(state, data) {
            return state.singlepost = data
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
        },

        getPostById(context, payload) {
            axios.get('/singlepost/' + payload)
                .then((response) => {
                    context.commit('singlepost', response.data.post)
                })
        }
    }
}