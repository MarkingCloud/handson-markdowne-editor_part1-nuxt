<template>
  <v-col>
    <v-row>
      <!-- テキスト追加カード -->
      <v-col cols="3">
        <v-card dark color="blue" height="20vh" ripple @click="add">
          <v-card-title class="headline"> 新しいテキストを追加＋ </v-card-title>
        </v-card>
      </v-col>
      <!-- カードリスト -->
      <v-col v-for="(memo, index) in memos" :key="memo.id" cols="3">
        <v-card height="20vh" ripple @click="edit(memo.id)">
          <v-card-title class="headline">
            {{ memo.data.title }}
            <v-spacer></v-spacer>
            <v-btn icon color="red" @click="remove(index)">
              <v-icon>memoi-trash-can-outline</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>{{ memo.data.timestamp }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-btn color="primary" @click="save"> SAVE </v-btn>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      newid: Math.random().toString(32).substring(2),
    }
  },
  computed: {
    memos() {
      return this.$store.state.memos.list
    },
  },
  // created() {
  //   this.$store.dispatch('memos/readDb')
  // },
  methods: {
    save() {
      console.log('test')
      this.$store.commit('memos/add', { id: this.newid, data: 'data' })
    },
    add() {
      window.location.href = '/' + this.newid
    },
    edit(id) {
      window.location.href = '/' + id
    },
    remove(index) {
      if (confirm('削除しますか？')) {
        this.$store.commit('memos/remove', index)
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
