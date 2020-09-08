import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'
import EditCategory from './components/admin/category/Edit.vue'

import PostList from './components/admin/post/List.vue'
import AddPost from './components/admin/post/New.vue'

export const routes = [
    { path: '/home', component: AdminHome },
    { path: '/category-list', component: CategoryList },
    { path: '/add-category', component: AddCategory },
    { path: '/edit-category/:categoryid', component: EditCategory },
    
    // Post routes
    { path: '/post-list', component: PostList },
    { path: '/add-post', component: AddPost },
]