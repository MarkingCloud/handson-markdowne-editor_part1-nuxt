# 6. Components を使ってみる

コンポーネント指向について理解しましょう。  
要素をコンポーネント化することで、コードと画面の構造が一致して理解しやすくります。

<img :src="$withBase('/components.png')">

## 1. コンポーネントの使いどころ

コンポーネントが利用されていることを確認しましょう。

次の操作を行ってください。

- 次のファイルを確認する。

  - <details><summary>pages/index.vue</summary>

    ```vue
    <template>
      <v-row>
        <!-- テキスト追加カード -->
        <v-col cols="3">
          <NewCardComponent />
        </v-col>
        <!-- カードリスト -->
        <v-col v-for="memo in memos" :key="memo.id" cols="3">
          <CardComponent :memo="memo" />
        </v-col>
      </v-row>
    </template>
    ```

    </details>

  - <details><summary>components/NewCardComponent.vue</summary>

    ```vue
    <template>
      <v-card dark color="blue" height="20vh" ripple @click="add">
        <v-card-title class="headline"> 新しいテキストを追加＋ </v-card-title>
      </v-card>
    </template>

    <script>
    export default {
      // 変数
      data() {
        return {
          // IDに利用するランダムな文字列を生成
          newid: Math.random().toString(32).substring(2),
        }
      },
      // 関数定義
      methods: {
        add() {
          const path = '/' + this.newid
          this.$router.push(path)
        },
      },
    }
    </script>
    ```

    </details>

  - <details><summary>components/CardComponent.vue</summary>

    ```vue
    <template>
      <v-card height="20vh" ripple @click="edit(memo.id)">
        <!-- タイトル -->
        <v-card-title class="headline">
          {{ memo.data.title }}
        </v-card-title>
        <!-- 削除ボタン -->
        <div class="ma-2" style="position: absolute; bottom: 0; right: 0">
          <v-btn icon color="red" @click="remove(memo.id)">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </div>
        <!-- サブタイトル(時刻を表示) -->
        <div style="position: absolute; bottom: 0">
          <v-card-subtitle>{{ memo.data.timestamp }}</v-card-subtitle>
        </div>
      </v-card>
    </template>

    <script>
    export default {
      // 親から渡された値
      props: { memo: { type: Object, required: true } },
      // 計算した値をとる変数
      computed: {
        memos() {
          // store/memos.js/listを取得
          return this.$store.state.memos.list
        },
      },
      // 関数定義
      methods: {
        edit(id) {
          const path = '/' + id
          this.$router.push(path)
        },
        remove(id) {
          if (confirm('削除しますか？')) {
            // store/memos.js/removeを実行
            this.$store.commit('memos/remove', id)
          }
        },
      },
    }
    </script>
    ```

    </details>

<img :src="$withBase('/compleat.png')">

Nuxt では **components/に作成したファイルがそのままコンポーネントとして使える**ようになります。

また pages 側で利用する際には、**最初から勝手にインポートされているため import 文の記述は不要**です。

## 2. コンポーネントのコメントアウト解除

\_id.vue にて EditorComponent のコメントアウトを解除して、画面を完成させましょう。

次の操作を行ってください。

- pages/\_id.vue 次の通り編集する
  - L5 のコメントアウトを解除
  - L4 をコメントアウト

`code.6-1` _pages/\_id.vue_

```vue{4-5}
<template>
  <v-row>
    <v-col cols="12">
      <!-- <span> このページのIDは「{{ id }}」です。</span> -->
      <EditorComponent />
    </v-col>
  </v-row>
</template>
```

次のようなページが作成されます。

<img :src="$withBase('/editor.png')">

これで必要な画面は揃いました。残りはデータの取得/編集機能の作成になります。
