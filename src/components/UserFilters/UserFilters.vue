<template>
    <section class="user-filters">
        <v-btn-toggle
          v-model="filters.skillSetValue"
          dense
          multiple
          style="background-color: transparent"
        >
            <v-btn v-for="skillSet in getSkillSetsForSelect" v-bind:value="skillSet.id" v-bind:key="skillSet.id" :style="getStyle(skillSets[skillSet.id].color)">
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
            ...mapGetters(['getSkillSetsForSelect']),
            skillSets() {
                return this.$store.getters.getSkillSetsObjects;
            },
        },
        methods: {
            getStyle(color) {
                return `background-color: ${color}; color: white; font-weight: bold; margin-right: 5px; border-radius: 5px; padding: 4px 8px; margin-top: 2px; margin-bottom: 2px; font-size: 13px;`;
            }
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
    .v-btn--active {
        filter: brightness(0.6)
    }
</style>