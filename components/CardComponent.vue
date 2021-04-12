<template>
  <v-card height="20vh" ripple @click="edit(memo.id)">
    <!-- タイトル -->
    <v-card-title class="headline">
      {{ memo.data.title }}
      <v-spacer></v-spacer>
      <!-- 削除ボタン -->
      <v-btn icon color="red" @click="remove(memo.id)">
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </v-card-title>
    <!-- サブタイトル(時刻を表示) -->
    <v-card-subtitle>{{ memo.data.timestamp }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  // 親から渡された値
  props: { memo: { type: Object, required: true } },
  // 処理結果を変数へ格納
  computed: {
    memos() {
      // store/memos.js/listを取得
      return this.$store.state.memos.list
    },
  },
  // 関数定義
  methods: {
    edit(id) {
      window.location.href = '/' + id
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

<style>
* {
  font-family: auto;
}
</style>
