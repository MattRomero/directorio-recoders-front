<template>
    <div class="main-navbar"> 
        <router-link to="/">
            <img src="../../assets/logo-recoders.svg" class="main-navbar__logo" alt="Recoders logo" >
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style>
    @import './Header.css';
</style>
