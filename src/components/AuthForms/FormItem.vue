<template>
    <div class="form-item">
        <label class="form-item__label" :for="name">{{ label }}</label>
        <div class="form-item__control">
            <input
                v-model="modelValue"
                @input="updateInput"
                :name="name"
                :type="internalInputType"
                :placeholder="placeholder"
                class="form-item__input"
                :class="{ 'is-invalid': submitted && !modelValue }"
            />
            <vue-feather
                @click="togglePassword"
                v-if="type == 'password' && internalInputType == 'password'"
                size="18"
                type="eye-off"
                stroke="#9FA2B4"
            ></vue-feather>
            <vue-feather
                @click="togglePassword"
                v-else-if="type == 'password' && internalInputType == 'text'"
                size="18"
                type="eye"
                stroke="#9FA2B4"
            ></vue-feather>
        </div>
        <div v-if="submitted && !modelValue" class="form-item__error">Это обязательное поле</div>
    </div>
</template>

<script>
import VueFeather from 'vue-feather';
export default {
    name: 'form-input',
    components: { VueFeather },
    props: {
        placeholder: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        submitted: {
            type: Boolean,
        },
        modelValue: [String, Number]
    },
    data() {
        return {
            internalInputType: this.type,
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        togglePassword(e) {
            if (this.internalInputType == 'password') {
                this.internalInputType = 'text'
            } else {
                this.internalInputType = 'password'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.form-item {
    position: relative;
    &__label {
        display: inline-block;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.323577px;
        text-transform: uppercase;
        color: #9fa2b4;
        margin-bottom: 6.5px;
    }
    &__control {
        position: relative;
        .vue-feather {
            cursor: pointer;
            position: absolute;
            right: 19px;
            top: calc(50% - 9px);
        }
    }
    &__input {
        width: 100%;
        padding: 12px 40px 12px 17px;
        background: #fcfdfe;
        border: 1px solid #f0f1f7;
        border-radius: 8px;
        outline: none;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 0.323577px;
        color: #4b506d;
        &:focus,
        &:active,
        &:focus-visible {
            border: 1px solid #b0b1b3;
        }
        &.is-invalid {
            border: 1px solid #f05555;
        }
    }

    &__error {
        position: absolute;
        bottom: -17px;
        color: #f05555;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 0.323577px;
    }
}
</style>