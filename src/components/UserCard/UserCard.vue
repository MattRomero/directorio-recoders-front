<template>
    <div class="user-list__user-card-container">
        <div class="user-card">
            <img src="../../assets/user-placeholder.svg" class="user-card__avatar" alt="User Image" >
            <p class="user-card__name">{{user.name}}</p>
            <p class="user-card__skills">
                <span v-for="(skill, index) in user.skillset" v-bind:skill="skill" v-bind:key="index" :style="getStyle(skillSets[skill].color)" >
                    {{ skillSets[skill].title }}
                </span>
            </p>
            <div class="user-card__button user-card__button--blue user-card__button--bottom-centered user-card__button--100w">
                Linkedin
            </div>
        </div>
    </div>
</template>

<script>               
export default {
    props: ['user'],
    name: 'UserCard',
    computed: { 
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
    @import './UserCard.css';
</style>