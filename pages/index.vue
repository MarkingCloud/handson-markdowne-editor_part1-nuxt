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

<script>
export default {
  computed: {
    memos() {
      return this.$store.state.memos.list
    },
  },
  created() {
    // this.$store.dispatch('memos/readDb')
  },
}
</script>
