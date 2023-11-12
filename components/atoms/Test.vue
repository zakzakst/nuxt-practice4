<template>
  <div>
    <div>no class or id</div>
    <div>
      <div class="test">class test</div>
      <div id="test">id test</div>
      <div class="class-1">
        <div class="class-2">
          <div class="class-3">
            <div class="class-4">
              <span class="class-5">deep layer class</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @layer ab-tests {
//   div {
//     color: #00f;
//   }
//   .test {
//     color: #00f;
//   }
//   #test {
//     color: #00f;
//   }
// }

@layer molecules {
  div {
    color: #f00;
  }
  .test {
    color: #f00;
  }
  #test {
    color: #f00;
  }
}

@layer atoms {
  div {
    color: #0f0;
  }
  .test {
    color: #0f0;
  }
  #test {
    color: #0f0;
  }
  .class-1 {
    > .class-2 {
      > .class-3 {
        > .class-4 {
          > .class-5 {
            color: #0f0;
          }
          // NOTE: 一度セレクタを記載しないと無効になる
          // @layer ab-tests {
          //   color: #000;
          // }
          // NOTE: レイヤーの順番指定にatoms.ab-testsと入れてもベースの順番が優先される
          @layer ab-tests {
            > .class-5 {
              color: #eee;
            }
          }
        }
      }
    }
  }
}

// NOTE: pages/indexで指定したスタイルを上書きできる
@layer ab-tests {
  .class-5 {
    color: #888;
  }
}

// NOTE:
// layer.scssで優先度指定してないlayerは記載順に優先度が設定される
// （hogeのidセレクタよりもfugaの要素セレクタのほうが優先されている）
// layer内で指定したスタイルよりもlayer外で指定したスタイルが優先される
// @layer hoge {
//   div {
//     color: #ddd;
//   }
//   .test {
//     color: #ddd;
//   }
//   #test {
//     color: #ddd;
//   }
// }

// div {
//   color: #00f;
// }
// .test {
//   color: #00f;
// }
// #test {
//   color: #00f;
// }

// @layer fuga {
//   div {
//     color: #888;
//   }
//   .test {
//     color: #888;
//   }
//   #test {
//     color: #888;
//   }
//   // NOTE: セレクタの詳細度を上げても優先度には変化なし
//   div > div#test {
//     color: #888;
//   }
// }
</style>
