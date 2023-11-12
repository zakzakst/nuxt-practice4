<template>
  <div class="modal">
    <div class="content">
      <div class="body">
        <slot />
      </div>
      <div class="bottom">
        <molecules-close-button />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@layer molecules {
  .modal {
    position: fixed;
    z-index: 100;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: rgba(#000, 0.5);
    > .content {
      width: min(100%, 480px);
      background: #fff;
      padding: 12px;
      display: flex;
      flex-direction: column;
      > .body {
        color: #000;
        width: 100%;
      }
      > .bottom {
        width: 100%;
        border-top: 1px solid #000;
        padding: 12px 0;
        display: flex;
        justify-content: center;
        :deep(.close-button) {
          background: #fff;
          color: #000;
          border-radius: 10px;
          border: 2px solid #f00;
          &:hover {
            background: #eee;
          }
        }
      }
    }
  }
}

// .modal {
//   position: fixed;
//   z-index: 100;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 12px;
//   background: rgba(#000, 0.5);
//   > .content {
//     width: min(100%, 480px);
//     background: #fff;
//     padding: 12px;
//     display: flex;
//     flex-direction: column;
//     > .body {
//       color: #000;
//       width: 100%;
//     }
//     > .bottom {
//       width: 100%;
//       border-top: 1px solid #000;
//       padding: 12px 0;
//       display: flex;
//       justify-content: center;
//       :deep(.close-button) {
//         background: #fff;
//         color: #000;
//         border-radius: 10px;
//         border: 2px solid #f00;
//         &:hover {
//           background: #eee;
//         }
//       }
//     }
//   }
// }
</style>
