<template>
  <section class="home">
    <Hero />
    <UserFilters />
    <UserCardList />
  </section>
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero/Hero'
import UserFilters from '@/components/UserFilters/UserFilters'
import UserCardList from '@/components/UserCardList/UserCardList'


export default {
  name: 'Home',
  components: {
    Hero, UserFilters, UserCardList
  }
}
</script>

<style>
    @import './Home.css';
</style>