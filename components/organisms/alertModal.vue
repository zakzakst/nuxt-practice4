<template>
  <molecules-modal
    class="alert-modal"
    :class="{ '--disabled': disabled }"
    :style="style"
  >
    <p class="text">
      テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
    </p>
  </molecules-modal>
</template>

<script lang="ts" setup>
type Props = {
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const style = computed(() => {
  return props.disabled ? '--type: "disabled"' : undefined;
});
</script>

<style lang="scss" scoped>
@layer organisms {
  .alert-modal {
    container-name: alert-modal;
    // TODO: カスタムプロパティにscopedの値反映できるのか調べてみたい
    // &.--disabled {
    //   --type: "disabled";
    // }

    .text {
      padding: 12px 0;
      @container alert-modal style(--type: 'disabled') {
        color: #f00;
      }
    }

    :deep(.bottom) {
      border-top-style: dotted;
      border-top-width: 2px;
    }

    :deep(.close-button) {
      border-radius: 0;
      @container alert-modal style(--type: 'disabled') {
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
