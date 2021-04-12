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
      window.location.href = '/' + this.newid
    },
  },
}
</script>

<style>
* {
  font-family: auto;
}
</style>
