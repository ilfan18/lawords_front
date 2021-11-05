<template>
    <li class="nav__item">
        <router-link
            @click="menuClick"
            :to="href"
            class="nav__link"
            :class="{ round: round }"
            active-class="active"
            :title="title"
        >
            <vue-feather size="28" :type="type" stroke="#262626" scoped></vue-feather>
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
        href: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        round: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        menuClick() {
            this.isActive = true
            this.stroke = '#FFFFFF'
        }
    },
    computed: {
        strokeColor() {
            return this.isActive ? '#FFFFFF' : '#262626'
        }
    }
}
</script>

<style lang="scss">
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
    &.active.round {
        background: linear-gradient(92.51deg, #262626 0.36%, #1b1651 98.43%);
        .vue-feather__content {
            stroke: #fff;
        }
    }
    &.round {
        border-radius: 50%;
        background-color: #efefef;
    }
}
</style>