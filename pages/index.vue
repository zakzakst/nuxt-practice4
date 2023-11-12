<template>
  <div class="index">
    <atoms-test class="atoms-test" />
    <organisms-alert-modal />
  </div>
</template>

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
