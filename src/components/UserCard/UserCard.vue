<template>
    <div class="user-list__user-card-container">
        <div class="user-card">
            <img src="../../assets/user-placeholder.svg" class="user-card__avatar" alt="User Image" >
            <p class="user-card__name">{{user.name}}</p>
            <p class="user-card__description">{{user.description}}</p>
        </div>
        <div class="user-card__button user-card__button--blue user-card__button--bottom-centered">
            Linkedin
        </div>
    </div>
</template>

<script>

export default {
    props: ['user'],
    name: 'UserCard',
}
</script>


<style>
    @import './UserCard.css';
</style>