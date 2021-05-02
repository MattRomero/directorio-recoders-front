<template>
    <section class="user-filters">
        <v-menu class="user-filters__menu-dropdown" offset-y :close-on-click="false" :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    id="user-filters__skillset-menu-toggle"
                >
                    Perfil profesional  <i class="fas fa-caret-up "></i>
                </v-btn>
            </template>
            <v-btn-toggle
                v-model="filters.skillSetValue"
                dense
                multiple
                class="user-filters__toggle-btn-container"
                >
                <v-btn v-for="skillSet in getSkillSetsForSelect" class="user-filters__toggle-btn" v-bind:value="skillSet.id" v-bind:key="skillSet.id" :style="getStyle(skillSet.id,skillSets[skillSet.id].color)">
                    {{ skillSet.title }}
                </v-btn>
            </v-btn-toggle>
        </v-menu>
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
                return this.$store.getters.getSkillSetsObjects
            },
        },
        methods: {
            getStyle(skillSetId,color) {
                if (this.$store.state.filters.skillSetValue.indexOf(skillSetId) == -1) return
                return `background-color: ${color};`
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

    .v-btn-toggle .v-btn {
        filter: grayscale(1)
    }

    .v-btn-toggle .v-btn--active {
        filter: grayscale(0)
    }
</style>