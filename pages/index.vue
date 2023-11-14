<template>
  <div class="index">
    <atoms-test class="atoms-test" />
    <!-- <organisms-alert-modal :disabled="alertDisabled" /> -->
    <!-- <nuxt-img
      src="/images/600x600.png"
      width="450"
      height="230"
      format="webp"
      quality="80"
      fit="contain"
      background="#FFFFFF00"
      :placeholder="[450, 230, 50, 5]"
    /> -->
    <!-- <nuxt-img
      src="/images/600x600.png"
      width="50"
      height="50"
      format="webp"
      quality="80"
      fit="cover"
      background="#FFFFFF00"
      :placeholder="[450, 230, 50, 5]"
      sizes="100vw sm:50vw md:400px"
    /> -->
    <nuxt-img
      src="https://picsum.photos/id/237/600/600"
      width="100"
      height="100"
      format="webp"
      quality="80"
      fit="cover"
      background="#FFFFFF00"
      :placeholder="[450, 230, 50, 5]"
      sizes="100vw sm:50vw md:400px"
      @load="onLoad"
    />
  </div>
</template>

<script lang="ts" setup>
const alertDisabled = ref(true);

const onLoad = () => {
  console.log("onload");
};
</script>

<style lang="scss" scoped>
@layer pages {
  div {
    color: #ff0;
  }
  // NOTE: scopedの影響は受ける
  .test {
    color: #ff0;
  }
  #test {
    color: #ff0;
  }
  // TODO: deepセレクタ使えばスタイルあてられる
  .atoms-test {
    :deep(.class-5) {
      color: #ff0;
    }
  }
}
</style>

<style lang="scss">
@layer pages {
  // div {
  //   color: #0ff;
  // }
  // .test {
  //   color: #0ff;
  // }
  // #test {
  //   color: #0ff;
  // }
}
</style>
