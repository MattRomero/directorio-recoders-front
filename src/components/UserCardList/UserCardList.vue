<template>
    <section>
        <h1>DIRECTORIO<br>RECODERS</h1>
        <div class="user-list">
            <UserCard v-for="(user,index) in userlist" v-bind:user="user" v-bind:key="user.id"></UserCard>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import UserCard from '@/components/UserCard/UserCard'

export default {
    name: 'UserCardList',
    components: {
        UserCard,
    },
    computed: { 
        userlist() {
            return this.$store.getters.getUserList;
        },
    },
    methods: {
    },
    beforeMount: function () {
        this.$store.dispatch('getUsers');
    }
}
</script>

<style>
    @import './UserCardList.css';
</style>