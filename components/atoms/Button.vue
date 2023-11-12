<template>
  <button class="button">
    <span class="text">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@layer atoms {
  .button {
    padding: 24px;
    color: #fff;
    background: #000;
    cursor: pointer;
    > .text {
      text-align: center;
    }
  }
}
</style>
