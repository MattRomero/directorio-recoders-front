<template>
    <section class="user-list__container">
        <h2 class="user-list__header">Directorio<br>Recoders</h2>
        <div class="user-list">
            <UserCard v-for="(user) in userlist" v-bind:user="user" v-bind:key="user.id"></UserCard>
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