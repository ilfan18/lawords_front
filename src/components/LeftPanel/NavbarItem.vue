<!-- !Цвет иконок от темы сделать  -->
<template>
    <li class="nav__item">
        <router-link :to="url" class="nav__link" active-class="active" :title="title">
            <vue-feather size="28" :type="type" :stroke="stroke" />
        </router-link>
    </li>
</template>

<script>
import VueFeather from 'vue-feather';

export default {
    name: 'navbar-item',
    components: { VueFeather },
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
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        stroke() {
            return this.$store.state.ui.theme == 'light' ? '#262626' : '#FFFFFF';
        }
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