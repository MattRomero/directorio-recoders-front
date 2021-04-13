<template>
    <div class="user-list__user-card-container">
        <div class="user-card">
            <img src="../../assets/user-placeholder.svg" class="user-card__avatar" alt="User Image" >
            <p class="user-card__name">{{user.name}}</p>
            <p class="user-card__skills">
                <span v-for="(skill, index) in user.skillset" v-bind:skill="skill" v-bind:key="index" :style="getStyle(skillSets[skill].color)">
                    {{skillSets[skill].title}}
                </span>
            </p>
            <p class="user-card__description">{{user.description}}</p>
            <div class="user-card__button user-card__button--blue user-card__button--bottom-centered">
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
            return this.$store.getters.getSkillSets;
        },
    },
    methods: {
        getStyle(color) {
            return `color: ${color}; font-weight: bold;`;
        }
    }
}
</script>


<style>
    @import './UserCard.css';
</style>