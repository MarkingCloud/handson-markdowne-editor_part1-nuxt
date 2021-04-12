<template>
  <div>
    <editor ref="toastuiEditor" height="80vh" />
    <viewer />
    <div class="mt-4">
      <v-btn color="primary" :loading="loading" @click="save"> SAVE </v-btn>
      <v-btn color="error" @click="back"> BACK </v-btn>
    </div>
  </div>
</template>

<script>
import { Editor, Viewer } from '@toast-ui/vue-editor'

export default {
  components: {
    editor: Editor,
    viewer: Viewer,
  },
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
    }
  },
  computed: {
    initial() {
      const list = this.$store.state.memos.list
      const target = list.find((item) => item.id === this.id)
      return target
    },
  },
  mounted() {
    if (this.initial) {
      this.$refs.toastuiEditor.invoke('setMarkdown', this.initial.data.text)
    }
  },
  methods: {
    async save() {
      const saveText = this.$refs.toastuiEditor.invoke('getMarkdown')
      const saveTitle = saveText.substring(0, saveText.indexOf('\n'))
      const saveTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
      this.loading = true
      try {
        await this.$store.dispatch('memos/saveLocalMemo', {
          newid: this.id,
          newdata: {
            text: saveText,
            title: saveTitle,
            timestamp: saveTime,
          },
        })
      } catch (e) {
        alert(e)
        this.loading = false
      }
      this.loading = false
    },
    back() {
      window.location.href = '/'
    },
  },
}
</script>

<style>
* {
  font-family: auto;
}
</style>
