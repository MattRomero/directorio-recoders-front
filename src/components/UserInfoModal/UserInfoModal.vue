<template>
        <v-dialog v-model="$store.state.userDetails.showModal" overlay-color="#0091CB" overlay-opacity="0.8" max-width="700px" content-class="user-info-modal__container">
            <v-card class="user-info-modal" v-if="user">
                <div class="user-info-modal__header">
                    <div class="user-info-modal__general-info">
                        <p class="user-info-modal__name">{{user.name}}</p>
                        <p class="user-info-modal__skills">
                            <span v-for="(skill, index) in user.skillset" v-bind:skill="skill" v-bind:key="index" class="user-info-modal__skill" :style="getStyle(skillSets[skill].color)" >
                                {{ skillSets[skill].title }}
                            </span>
                        </p>
                        <p class="user-info-modal__description"> {{user.description}} </p>
                    </div>
                    <img :src="`https://source.unsplash.com/200x200/?pets&id=${user.id}`" class="user-info-modal__avatar" alt="User Image" >
                </div>
                <div class="user-info-modal__info">
                    <p class="user-info-modal__web"><i class="fas fa-link"></i>{{ user.website }}</p>
                    <p class="user-info-modal__location"><i class="fas fa-map-marker-alt"></i>{{ user.location }}</p>
                     <div class="user-info-modal__icons">
                        <div v-for="(icon, index) in user.icons" :key="index" class="user-info-modal__icon-container">
                            <i :class="[icon.type, 'test']"></i>
                        </div>
                    </div>
                </div>
                <div class="user-info-modal__button user-info-modal__button--blue user-info-modal__button--bottom-centered user-info-modal__button--100w">
                    Linkedin
                </div>
            </v-card>
        </v-dialog>
</template>

<script>
    export default {
        name: 'UserInfoModal',
  
        methods: {
            getStyle(color) {
                return `color: ${color};`
            },
        },
        computed: {
            user() {
                return this.$store.state.userDetails.selectedUser;
            },
            skillSets() {
                return this.$store.getters.getSkillSetsObjects;
            },
        },
    }
</script>

<style>
    @import './UserInfoModal.css';
</style>