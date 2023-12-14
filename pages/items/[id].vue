<template>
  <div class="item">
    <div class="content">
      <h1 class="title">タイトル</h1>
      <div class="text">
        <NuxtLink to="/items">戻る</NuxtLink>
      </div>
    </div>
    <div class="bg">
      <img
        :src="`https://picsum.photos/id/${route.params.id}/200/300`"
        class="img"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  min-height: 100vh;
  > .content {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: auto;
    background: #fff;
    padding: 32px;
    > .title {
      view-transition-name: title;
    }
  }
  > .bg {
    position: fixed;
    inset: 0;
    view-transition-name: selected-item;
    > .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<style>
::view-transition-old(header),
::view-transition-new(header) {
  width: auto;
}
</style>
