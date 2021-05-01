<template>
    <div class="user-list__user-card-container">
        <div class="user-card">
            <div class="user-card__header">
                <div class="user-card__icons">
                    <div v-for="(icon, index) in user.icons" :key="index" class="user-card__icon-container">
                        <i :class="[icon.type, 'test']"></i>
                    </div>
                </div>
                <img :src="`https://source.unsplash.com/200x200/?pets&id=${user.id}`" class="user-card__avatar" alt="User Image" >
            </div>
            <div class="user-card__info">
                <p class="user-card__name">{{user.name}}</p>
                <p class="user-card__skills">
                    <span v-for="(skill, index) in user.skillset" v-bind:skill="skill" v-bind:key="index" class="user-card__skill" :style="getStyle(skillSets[skill].color)" >
                        {{ skillSets[skill].title }}
                    </span>
                </p>
            </div>
            <div class="user-card__info">
                <p class="user-card__web"><i class="fas fa-link"></i>{{ user.website }}</p>
                <p class="user-card__location"><i class="fas fa-map-marker-alt"></i>{{ user.location }}</p>
            </div>
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
            return `color: ${color};`
        }
    }
}
</script>


<style>
    @import './UserCard.css';
</style>