<template>
    <section class="user-filters">
        <v-btn-toggle
          v-model="filters.skillSetValue"
          dense
          background-color="primary"
          dark
          multiple
        >
            <v-btn v-for="skillSet in getSkillSetsForSelect" v-bind:value="skillSet.id" v-bind:key="skillSet.id">
                {{ skillSet.title }}
            </v-btn>
        </v-btn-toggle>
        {{ filters.skillSetValue }}
    </section>
</template>

<script>
    import { mapState, mapGetters } from "vuex"
    export default {
        name: 'UserFilters',
        computed: {
            ...mapState(['filters']),
            ...mapGetters(['getSkillSetsForSelect'])
        }
    }
</script>

<style>
    @import './UserFilters.css';
    .select {
        background-color: white;
        padding: 10px 20px;
        border-radius: 5px;
        -webkit-appareance: auto!important;
    }
</style>