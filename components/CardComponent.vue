<template>
  <v-card height="20vh" ripple @click="edit(memo.id)">
    <v-card-title class="headline">
      {{ memo.data.title }}
      <v-spacer></v-spacer>
      <v-btn icon color="red" @click="remove(memo.id)">
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>{{ memo.data.timestamp }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: { memo: { type: Object, required: true } },
  computed: {
    memos() {
      return this.$store.state.memos.list
    },
  },
  methods: {
    edit(id) {
      window.location.href = '/' + id
    },
    remove(id) {
      if (confirm('削除しますか？')) {
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
