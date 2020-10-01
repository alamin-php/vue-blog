require('./bootstrap');
window.Vue = require('vue');

// Vuex import
import Vuex from 'vuex'
Vue.use(Vuex)

import VueProgressBar from 'vue-progressbar'
// Vue.use(VueProgressBar, {
//     // color: 'rgb(143, 255, 199)',
//     color: '#2dbd2d',
//     failedColor: 'red',
//     height: 35
// })

const options = {
    color: '#38c170',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}
Vue.use(VueProgressBar, options)

// Mark-down text-editor support
import 'v-markdown-editor/dist/v-markdown-editor.css';
import Editor from 'v-markdown-editor'
// global register
Vue.use(Editor);

//support moment
import { filter } from './filter'

import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)

// vue router import
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './routes';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-master', require('./components/public/PublicMaster.vue').default);

// V-form 
import {
    Form,
    HasError,
    AlertError
} from 'vform'

window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.Toast = Toast;


const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'hash',
    // mode: 'history',
})

const app = new Vue({
    el: '#app',
    router,
    store
});