<template>
  <section class="home">
    <Hero />
    <UserCardList />
  </section>
</template>

<script>
// @ is an alias to /src

import UserCardList from '@/components/UserCardList/UserCardList'
import Hero from '@/components/Hero/Hero'


export default {
  name: 'Home',
  components: {
    UserCardList, Hero
  }
}
</script>

<style>
    @import './Home.css';
</style>