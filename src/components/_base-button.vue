<template>
    <button :class="$style.button" v-on="$listeners">
        <slot />
    </button>
</template>

<style lang="scss" module>
@import '@/design';

.button {
    padding: $size-button-padding;

    @extend %typography-small;

    color: $color-button-text;
    cursor: pointer;
    background: $color-button-bg;
    border: none;
    &:disabled {
        cursor: not-allowed;
        background: $color-button-disabled-bg;
    }
}
</style>
