<template>
  <molecules-modal class="alert-modal" :class="{ '--disabled': disabled }">
    <p class="text">
      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
    </p>
  </molecules-modal>
</template>

<script lang="ts" setup>
type Props = {
  disabled?: boolean;
};

withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<style lang="scss" scoped>
@layer organisms {
  .alert-modal {
    container-name: alert-modal;
    // TODO: カスタムプロパティ「--type」がこのままだと上層のlayerで同じ名前が利用された時に上書きされる？要挙動確認（インラインstyleに記載するのが丸いかなぁ。。）
    &.--disabled {
      --type: "disabled";
    }

    .text {
      padding: 12px 0;
      @container style(--type: 'disabled') {
        color: #f00;
      }
    }

    :deep(.bottom) {
      border-top-style: dotted;
      border-top-width: 2px;
    }

    :deep(.close-button) {
      border-radius: 0;
      @container style(--type: 'disabled') {
        background: #888;
        border-color: #000;
        pointer-events: none;
      }
    }
  }
}

// .alert-modal {
//   .text {
//     padding: 12px 0;
//   }
//   :deep(.content) {
//     > .bottom {
//       border-top-style: dotted;
//       border-top-width: 2px;
//       > .close-button {
//         border-radius: 0;
//       }
//     }
//   }
//   &.--disabled {
//     .text {
//       color: #f00;
//     }
//     :deep(.content) {
//       > .bottom {
//         > .close-button {
//           background: #888;
//           border-color: #000;
//           pointer-events: none;
//         }
//       }
//     }
//   }
// }
</style>
