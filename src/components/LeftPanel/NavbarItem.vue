<!-- !Цвет иконок от темы сделать  -->
<template>
    <li class="nav__item">
        <router-link :to="url" class="nav__link" active-class="active" :title="title">
            <vue-feather size="28" :type="type" stroke="#262626"></vue-feather>
        </router-link>
    </li>
</template>

<script>
import VueFeather from 'vue-feather';
export default {
    components: { VueFeather },
    data() {
        return {
            isActive: false
        }
    },
    props: {
        type: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.nav__item {
    margin-bottom: 16px;
}
.nav__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    text-decoration: none;
    border-radius: 50%;
    &.active {
        background-color: #3bafda;
    }
    &:hover {
        background-color: var(--nav-item-round);
    }
    &.active:hover {
        background-color: #3bafda;
    }
}
</style>
// ! Придумаешь лучше - сделай лучше
<style lang="scss">
.nav__link {
    &.active {
        .vue-feather__content {
            stroke: #fff;
        }
    }
}
</style>