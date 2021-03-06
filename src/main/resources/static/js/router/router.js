import Vue from 'vue'
import VueRouter from 'vue-router'

import MessageList from 'components/MessageList.vue'
import Auth from 'pages/Auth.vue'
import Profile from 'pages/Profile.vue'
import Settings from "pages/Settings.vue";

Vue.use(VueRouter)

const routes = [
    {path: '/', component: MessageList},
    {path: '/auth', component: Auth},
    {path: '/profile/:id', component: Profile},
    {path: '/settings', component: Settings},
    {path: '*', component: MessageList}
]


export default new VueRouter({
    mode: 'history',
    routes
})