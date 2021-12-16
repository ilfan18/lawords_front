<template>
    <div class="password-input">
        <label class="password-input__label" :for="name">{{ label }}</label>
        <div class="password-input__control">
            <input
                v-model="modelValue"
                @input="updateInput"
                :name="name"
                :id="name"
                :type="internalInputType"
                :placeholder="placeholder"
                class="password-input__input"
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
        <div v-if="submitted && !modelValue" class="password-input__error">Заполните это поле.</div>
    </div>
</template>

<script>
export default {
    name: 'form-input',
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
.password-input {
    position: relative;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    &__label {
        width: 180px;
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
        padding: 12px 40px 12px 17px;
        background: var(--background-third);
        border: 1px solid var(--border-first);
        border-radius: 8px;
        outline: none;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 0.323577px;
        color: inherit;
        &[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
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
        margin-left: 15px;
        color: #f05555;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 0.323577px;
    }
}
</style>