
<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header';

  export default {
      components: {
          Header
      }
  }
</script>

<style>
  @import './App.css';
</style>
