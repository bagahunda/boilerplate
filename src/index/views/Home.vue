<template>
    <div class="home">
        <img src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div>
            <h2>Data from an API</h2>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{ user.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import HelloWorld from '@/index/components/HelloWorld.vue';
import { apiFactory } from '@/services/api/apiFactory';

const usersFactory = apiFactory.get('users');

export default {
    components: {
        HelloWorld,
    },

    data() {
        return {
            users: [],
        };
    },

    created() {
        this.getUsers();
    },

    methods: {
        async getUsers() {
            const { data } = await usersFactory.get();
            this.users = data;
        },
    },
};
</script>
