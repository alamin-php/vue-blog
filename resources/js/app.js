require('./bootstrap');
window.Vue = require('vue');

// vue router import
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './routes';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);

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
    mode: 'history',
})

const app = new Vue({
    el: '#app',
    router
});