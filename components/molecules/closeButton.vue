<template>
  <atoms-button class="close-button">
    <span class="icon">X</span>
    <span class="text">Close</span>
  </atoms-button>
</template>

<style lang="scss" scoped>
@layer molecules {
  .close-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    .icon {
      display: inline-block;
      margin-right: 8px;
    }
  }
}
</style>
